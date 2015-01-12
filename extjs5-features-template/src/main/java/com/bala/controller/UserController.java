package com.bala.controller;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bala.service.UserService;
import com.bala.vo.User;

@Controller
@RequestMapping(value = UserController.BASE_URL)
public class UserController {
	protected final static String BASE_URL = "user";
	private final static Logger logger = LoggerFactory
			.getLogger(UserController.class);

	@Autowired
	private UserService userService;

	/**
	 * URL Template :
	 * http://localhost:8082/extjs5-features-template/action/user/
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public Collection<User> getAll() {
		logger.info("init : getAll");
		return userService.getAll();
	}

	/**
	 * URL Template :
	 * http://localhost:8082/extjs5-features-template/action/user/123
	 * 
	 * @return Response Object
	 */

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public User getUser(@PathVariable("id") String id, User user) {
		return userService.get(id);
	}

	/**
	 * URL Template : http://localhost:8082/extjs5-features-template/action/user
	 * 
	 * @return Response Object
	 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public User create(User user) {
		return userService.create(user);
	}

	/**
	 * URL Template :
	 * http://localhost:8082/extjs5-features-template/action/user/1234
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public User updateUser(@PathVariable("id") String id, @RequestBody User user) {
		System.out.println("user" + user.toString());
		return userService.update(id, user);
	}

	/**
	 * URL Template :
	 * http://localhost:8082/extjs5-features-template/action/user/1234
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void updateUser(@PathVariable("id") String id) {
		userService.delete(id);
	}

}
