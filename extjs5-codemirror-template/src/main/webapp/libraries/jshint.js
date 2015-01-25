var JSHINT = (function() {

	validate = function(source, JSHINT) {
		if (typeof source === 'string') {
			lines = source.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
					.split('\n');
		} else {
			lines = source;
		}

	}
	var itself = function(s, o) {
		JSHINT.errors = [];
		JSHINT.undefs = [];
		validate(s, JSHINT)
		return JSHINT;
	};

	// Data summary.
	itself.data = function() {

		var data = {};

		if (itself.errors.length) {
			data.errors = itself.errors;
		}
		return data;
	};
	itself.jshint = itself;
	return itself;
}());
