package com.bala.domain;

import java.io.Serializable;

public class Article implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String id;
	private String name;
	private String description;

	public Article() {
		super();
	}

	public Article(String id, String name, String desc) {
		this.id = id;
		this.name = name;
		this.description = desc;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Article [id=" + id + ", name=" + name + ", description="
				+ description + "]";
	}

}
