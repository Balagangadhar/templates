package com.bala.service;

import com.bala.vo.TreeNode;

public class TreeNodeServiceStub {

	public TreeNode getTree() {
		return this.constructTree();
	}

	private TreeNode constructTree() {
		TreeNode rootNode = new TreeNode("Infra Structure");

		TreeNode databaseNode = rootNode.addChild("Database");
		databaseNode.addChild("My SQL");
		databaseNode.addChild("Oracle");
		databaseNode.addChild("Postgres");

		TreeNode osNode = rootNode.addChild("Operating System");
		osNode.addChild("Macintosh");
		osNode.addChild("Windows");
		osNode.addChild("Linux");

		TreeNode networkNode = rootNode.addChild("Networking");
		networkNode.addChild("CISCO");

		return rootNode;
	}
}
