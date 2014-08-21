package com.bala.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bala.model.ArticleEntity;
import com.bala.service.ArticleService;
import javax.ws.rs.core.MediaType;

/**
 * @author Bala
 *
 */
@Controller
@RequestMapping(value = ArticleController.BASE_URL, consumes = MediaType.APPLICATION_JSON, produces = MediaType.APPLICATION_JSON)
public class ArticleController {
	protected final static String BASE_URL = "article";

	@Autowired
	private ArticleService articleService;

	/**
	 * URL Template : http://localhost:8080/extjs4-grid-crud/action/article/
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public List<ArticleEntity> getAll() {
		return articleService.getAll();
	}

	/**
	 * URL Template : http://localhost:8080/extjs4-grid-crud/action/article/1
	 * 
	 * @return Response Object
	 */

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ArticleEntity get(@PathVariable("id") String id) {
		return articleService.get(id);
	}

	/**
	 * URL Template : http://localhost:8080/extjs4-grid-crud/action/article
	 * 
	 * @return Response Object
	 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public ArticleEntity create(@RequestBody ArticleEntity articleEntity) {
		System.out.println(articleEntity);
		return articleService.create(articleEntity);
	}

	/**
	 * URL Template : http://localhost:8080/extjs4-grid-crud/action/article/1
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public ArticleEntity update(@PathVariable("id") String id,
			@RequestBody ArticleEntity articleEntity) {
		return articleService.update(id, articleEntity);
	}

	/**
	 * URL Template : http://localhost:8080/extjs4-grid-crud/action/article/1
	 * 
	 * @return Response Object
	 */
	/**
	 * @param id
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void delete(@PathVariable("id") String id) {
		articleService.delete(id);
	}
}
