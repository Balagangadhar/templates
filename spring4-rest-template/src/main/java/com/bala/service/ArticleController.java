package com.bala.service;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bala.domain.Article;

@Controller
@RequestMapping(value = ArticleController.BASE_URL)
public class ArticleController {
	protected final static String BASE_URL = "article";

	/**
	 * URL Template :
	 * http://localhost:8080/spring4-rest-template/action/article/
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public ArrayList<Article> getAll() {
		// TODO get List of articles
		ArrayList<Article> models = new ArrayList<Article>();
		for (int i = 0; i < 10; i++) {
			models.add(new Article(String.valueOf(UUID.randomUUID()), "name" + String.valueOf(i), "description" + String.valueOf(i)));
		}
		return models;
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring4-rest-template/action/article/123
	 * 
	 * @return Response Object
	 */

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Article getArticle(@PathVariable("id") String id, Article article) {
		// TODO Update article by id
		Article articleUpdated = new Article(String.valueOf(id), "name" + article.getName(), "description" + article.getDescription());
		return articleUpdated;
	}

	/**
	 * URL Template : http://localhost:8080/spring4-rest-template/action/article
	 * 
	 * @return Response Object
	 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public Article createTrackInJSON(Article article) {
		// TODO Create article, generate id and send it back
		Article articleCreated = new Article(String.valueOf(UUID.randomUUID()), "name" + article.getName(), "description" + article.getDescription());
		return articleCreated;
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring4-rest-template/action/article/1234
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public Article updateArticle(@PathVariable("id") String id, Article article) {
		// TODO Update article by id
		Article articleUpdated = new Article(String.valueOf(id), "name" + article.getName(), "description" + article.getDescription());
		return articleUpdated;
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring4-rest-template/action/article/1234
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public String updateArticle(@PathVariable("id") String id) {
		// TODO Delete article by id
		String message = "Article " + id + "Deleted";
		return message;
	}
}
