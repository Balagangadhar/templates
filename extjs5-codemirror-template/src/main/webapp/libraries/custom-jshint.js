var CUSTOMLINT = (function() {
	var SEVERITIES = /^(?:error|warning)$/;
	var GUTTER_ID = "CodeMirror-lint-markers";
	function clearMarks(cm) {
		var state = cm.state.lint;
		var GUTTER_ID = "CodeMirror-lint-markers";
		if (state.hasGutter)
			cm.clearGutter(GUTTER_ID);
		for (var i = 0; i < state.marked.length; ++i)
			state.marked[i].clear();
		state.marked.length = 0;
	}
	function updateLinting(cm, annotationsNotSorted) {
		clearMarks(cm);
		var state = cm.state.lint, options = state.options;

		var annotations = groupByLine(annotationsNotSorted);

		for (var line = 0; line < annotations.length; ++line) {
			var anns = annotations[line];
			if (!anns)
				continue;

			var maxSeverity = null;
			var tipLabel = state.hasGutter && document.createDocumentFragment();

			for (var i = 0; i < anns.length; ++i) {
				var ann = anns[i];
				var severity = ann.severity;
				if (!SEVERITIES.test(severity))
					severity = "error";
				maxSeverity = getMaxSeverity(maxSeverity, severity);

				if (options.formatAnnotation)
					ann = options.formatAnnotation(ann);
				if (state.hasGutter)
					tipLabel.appendChild(annotationTooltip(ann));

				if (ann.to)
					state.marked.push(cm.markText(ann.from, ann.to, {
								className : "CodeMirror-lint-mark-" + severity,
								__annotation : ann
							}));
			}

			if (state.hasGutter)
				cm.setGutterMarker(line-1, GUTTER_ID, makeMarker(tipLabel,
								maxSeverity, anns.length > 1,
								state.options.tooltips));
		}
		if (options.onUpdateLinting)
			options.onUpdateLinting(annotationsNotSorted, annotations, cm);
	}
	function groupByLine(annotations) {
		var lines = [];
		for (var i = 0; i < annotations.length; ++i) {
			var ann = annotations[i], line = ann.line;
			(lines[line] || (lines[line] = [])).push(ann);
		}
		return lines;
	}
	function getMaxSeverity(a, b) {
		if (a == "error")
			return a;
		else
			return b;
	}
	function annotationTooltip(ann) {
		var severity = ann.severity;
		if (!SEVERITIES.test(severity))
			severity = "error";
		var tip = document.createElement("div");
		tip.className = "CodeMirror-lint-message-" + severity;
		tip.appendChild(document.createTextNode(ann.message));
		return tip;
	}
	function makeMarker(labels, severity, multiple, tooltips) {
		var marker = document.createElement("div"), inner = marker;
		marker.className = "CodeMirror-lint-marker-" + severity;
		if (multiple) {
			inner = marker.appendChild(document.createElement("div"));
			inner.className = "CodeMirror-lint-marker-multiple";
		}

		if (tooltips != false)
			CodeMirror.on(inner, "mouseover", function(e) {
						showTooltipFor(e, labels, inner);
					});

		return marker;
	}
	function showTooltipFor(e, content, node) {
		var tooltip = showTooltip(e, content);
		function hide() {
			CodeMirror.off(node, "mouseout", hide);
			if (tooltip) {
				hideTooltip(tooltip);
				tooltip = null;
			}
		}
		var poll = setInterval(function() {
					if (tooltip)
						for (var n = node;; n = n.parentNode) {
							if (n == document.body)
								return;
							if (!n) {
								hide();
								break;
							}
						}
					if (!tooltip)
						return clearInterval(poll);
				}, 400);
		CodeMirror.on(node, "mouseout", hide);
	}
	function showTooltip(e, content) {
		var tt = document.createElement("div");
		tt.className = "CodeMirror-lint-tooltip";
		tt.appendChild(content.cloneNode(true));
		document.body.appendChild(tt);

		function position(e) {
			if (!tt.parentNode)
				return CodeMirror.off(document, "mousemove", position);
			tt.style.top = Math.max(0, e.clientY - tt.offsetHeight - 5) + "px";
			tt.style.left = (e.clientX + 5) + "px";
		}
		CodeMirror.on(document, "mousemove", position);
		position(e);
		if (tt.style.opacity != null)
			tt.style.opacity = 1;
		return tt;
	}
	function hideTooltip(tt) {
		if (!tt.parentNode)
			return;
		if (tt.style.opacity == null)
			rm(tt);
		tt.style.opacity = 0;
		setTimeout(function() {
					rm(tt);
				}, 600);
	}
	function rm(elt) {
		if (elt.parentNode)
			elt.parentNode.removeChild(elt);
	}
	updateMarkers = function(cm, annotationsNotSorted) {
		updateLinting(cm, annotationsNotSorted)
	}
	return updateMarkers;
})();