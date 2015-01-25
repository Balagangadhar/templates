package com.bala.vo;

public class Issue {
	private int line;
	private String severity;
	private String message;

	public Issue(int line, String severity, String message) {
		super();
		this.line = line;
		this.severity = severity;
		this.message = message;
	}

	public int getLine() {
		return line;
	}

	public void setLine(int line) {
		this.line = line;
	}

	public String getSeverity() {
		return severity;
	}

	public void setSeverity(String severity) {
		this.severity = severity;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
