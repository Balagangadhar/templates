package com.bala.vo;

import java.util.List;

public class TreeNode {
	private String id;
	private String text;
	private String type;
	private String subType;
	private String check;
	private String description;
	private String status;
	private boolean leaf;
	List<TreeNode> children;

	public List<TreeNode> getChildren() {
		return children;
	}

	public void setChildren(List<TreeNode> children) {
		this.children = children;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSubType() {
		return subType;
	}

	public void setSubType(String subType) {
		this.subType = subType;
	}

	public String getCheck() {
		return check;
	}

	public void setCheck(String check) {
		this.check = check;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isLeaf() {
		if (this.children != null && this.children.size() > 0) {
			return false;
		}
		return true;
	}

	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
