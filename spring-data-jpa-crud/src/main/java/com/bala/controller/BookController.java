package com.bala.controller;

import java.awt.print.Book;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bala.model.BookEntity;
import com.bala.service.BookService;

/**
 * @author Bala
 *
 */
@Controller
@RequestMapping(value = BookController.BASE_URL)
public class BookController {
	protected final static String BASE_URL = "book";

	@Autowired
	private BookService bookService;

	/**
	 * URL Template : http://localhost:8080/spring-data-jpa-crud/action/book/
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public List<BookEntity> getAll() {
		return bookService.getAll();
	}

	/**
	 * URL Template : http://localhost:8080/spring-data-jpa-crud/action/book/1
	 * 
	 * @return Response Object
	 */

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public BookEntity get(@PathVariable("id") String id, Book book) {
		return bookService.get(id);
	}

	/**
	 * URL Template : http://localhost:8080/spring-data-jpa-crud/action/book
	 * 
	 * @return Response Object
	 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public BookEntity create(@RequestBody BookEntity bookEntity) {
		System.out.println(bookEntity);
		return bookService.create(bookEntity);
	}

	/**
	 * URL Template : http://localhost:8080/spring-data-jpa-crud/action/book/1
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public BookEntity update(@PathVariable("id") String id,
			@RequestBody BookEntity bookEntity) {
		return bookService.update(id, bookEntity);
	}

	/**
	 * URL Template : http://localhost:8080/spring-data-jpa-crud/action/book/1
	 * 
	 * @return Response Object
	 */
	/**
	 * @param id
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void delete(@PathVariable("id") String id) {
		bookService.delete(id);
	}
}
