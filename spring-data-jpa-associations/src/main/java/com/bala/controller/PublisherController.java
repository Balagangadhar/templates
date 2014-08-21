package com.bala.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bala.model.PublisherEntity;
import com.bala.service.PublisherService;

/**
 * @author Bala
 * 
 */
@Controller
@RequestMapping(value = PublisherController.BASE_URL)
public class PublisherController {
	protected final static String BASE_URL = "publisher";

	@Autowired
	private PublisherService publisherService;

	/**
	 * URL Template :
	 * http://localhost:8080/spring-data-jpa-associations/action/publisher/
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public List<PublisherEntity> getAll() {
		return publisherService.getAll();
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-data-jpa-associations/action/publisher/1
	 * 
	 * @return Response Object
	 */

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public PublisherEntity get(@PathVariable("id") String id) {
		return publisherService.get(id);
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-data-jpa-associations/action/publisher
	 * 
	 * @return Response Object
	 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public PublisherEntity create(@RequestBody PublisherEntity publisherEntity) {
		System.out.println(publisherEntity);
		return publisherService.create(publisherEntity);
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-data-jpa-associations/action/publisher/1
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public PublisherEntity update(@PathVariable("id") String id, @RequestBody PublisherEntity publisherEntity) {
		return publisherService.update(id, publisherEntity);
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-data-jpa-associations/action/publisher/1
	 * 
	 * @return Response Object
	 */
	/**
	 * @param id
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void delete(@PathVariable("id") String id) {
		publisherService.delete(id);
	}
}
