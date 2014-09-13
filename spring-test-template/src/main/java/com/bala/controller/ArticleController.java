package com.bala.controller;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bala.domain.Article;
import com.bala.service.ArticleService;

@Controller
@RequestMapping(value = ArticleController.BASE_URL)
public class ArticleController {
	protected final static String BASE_URL = "article";
	private final static Logger logger = LoggerFactory
			.getLogger(ArticleController.class);

	@Autowired
	private ArticleService articleService;

	/**
	 * URL Template : http://localhost:8080/spring-test-template/action/article/
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public ArrayList<Article> getAll() {
		logger.info("init : getAll");
		return articleService.getAll();
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-test-template/action/article/123
	 * 
	 * @return Response Object
	 */

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Article getArticle(@PathVariable("id") String id, Article article) {
		return articleService.get(id);
	}

	/**
	 * URL Template : http://localhost:8080/spring-test-template/action/article
	 * 
	 * @return Response Object
	 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public Article create(Article article) {
		return articleService.create(article);
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-test-template/action/article/1234
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public Article updateArticle(@PathVariable("id") String id, Article article) {
		System.out.println("article" + article.toString());
		return articleService.update(id, article);
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-test-template/action/article/1234
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public String updateArticle(@PathVariable("id") String id) {
		return articleService.delete(id);
	}

}
