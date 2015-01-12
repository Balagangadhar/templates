package com.bala.vo;

public class User {
	private String id;
	private String name;
	private String address;

	public User() {
		super();
	}

	public User(String id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.address = description;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String description) {
		this.address = description;
	}

}
