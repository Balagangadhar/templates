package com.bala.vo;

import java.util.ArrayList;
import java.util.List;

public class TreeNode {
	private String text;
	private boolean expanded;
	private boolean leaf;
	private List<TreeNode> children;

	public TreeNode(String text) {
		this.text = text;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isExpanded() {
		return expanded;
	}

	public void setExpanded(boolean expanded) {
		this.expanded = expanded;
	}

	public boolean isLeaf() {
		return !(this.children != null && this.children.size() > 0);
	}

	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}

	public List<TreeNode> getChildren() {
		return children;
	}

	public void setChildren(List<TreeNode> children) {
		this.children = children;
	}

	public TreeNode addChild(String text) {
		if (this.children == null) {
			this.children = new ArrayList<TreeNode>();
		}
		TreeNode childNode = new TreeNode(text);
		this.children.add(childNode);
		return childNode;
	}
}
