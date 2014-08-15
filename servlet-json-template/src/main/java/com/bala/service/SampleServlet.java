package com.bala.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;

import com.bala.domain.Article;

public class SampleServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * GET URL Template : http://localhost:8080/servlet-json-template/action
	 * 
	 * @return Response Object
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		ArrayList<Article> models = new ArrayList<Article>();
		for (int i = 0; i < 10; i++) {
			models.add(new Article(String.valueOf(i), "name"
					+ String.valueOf(i), "description" + String.valueOf(i)));
		}
		mapper.writeValue(out, models);
	}

	/**
	 * POST URL Template : http://localhost:8080/servlet-json-template/action
	 * 
	 * @return Response Object
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		BufferedReader bufferedReader = request.getReader();

		String tmpSting;
		StringBuilder articleData = new StringBuilder();
		while ((tmpSting = bufferedReader.readLine()) != null) {
			articleData.append(tmpSting);
		}
		bufferedReader.close();
		ObjectMapper mapper = new ObjectMapper();
		Article article = null;
		try {
			article = mapper.readValue(articleData.toString(), Article.class);
			article.setId(article.getId() + "updatedId");
		} catch (IOException e) {
			e.printStackTrace();
		}
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		mapper.writeValue(out, article);
	}
}
