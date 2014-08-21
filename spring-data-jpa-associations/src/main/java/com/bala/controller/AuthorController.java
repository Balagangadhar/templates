package com.bala.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bala.model.AuthorEntity;
import com.bala.service.AuthorService;

/**
 * @author Bala
 * 
 */
@Controller
@RequestMapping(value = AuthorController.BASE_URL)
public class AuthorController {
	protected final static String BASE_URL = "author";

	@Autowired
	private AuthorService authorService;

	/**
	 * URL Template :
	 * http://localhost:8080/spring-data-jpa-associations/action/author/
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public List<AuthorEntity> getAll() {
		return authorService.getAll();
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-data-jpa-associations/action/author/1
	 * 
	 * @return Response Object
	 */

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public AuthorEntity get(@PathVariable("id") String id) {
		return authorService.get(id);
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-data-jpa-associations/action/author
	 * 
	 * @return Response Object
	 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public AuthorEntity create(@RequestBody AuthorEntity authorEntity) {
		System.out.println(authorEntity);
		return authorService.create(authorEntity);
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-data-jpa-associations/action/author/1
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public AuthorEntity update(@PathVariable("id") String id, @RequestBody AuthorEntity authorEntity) {
		return authorService.update(id, authorEntity);
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-data-jpa-associations/action/author/1
	 * 
	 * @return Response Object
	 */
	/**
	 * @param id
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void delete(@PathVariable("id") String id) {
		authorService.delete(id);
	}
}
