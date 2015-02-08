package com.bala.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bala.service.TreeNodeServiceStub;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TreeController extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * GET URL Template : http://localhost:8080/extjs5-tree-template/tree
	 * 
	 * @return Response Object
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		mapper.writeValue(out, new TreeNodeServiceStub().getTree());
	}

}
