package com.bala.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bala.vo.Issue;

@Controller
@RequestMapping(value = ValidationController.BASE_URL)
public class ValidationController {
	protected final static String BASE_URL = "validator";

	/**
	 * URL Template :
	 * http://localhost:8080/spring4-rest-template/action/validator/validations
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/validations", method = RequestMethod.GET)
	@ResponseBody
	public ArrayList<Issue> getAll() {
		ArrayList<Issue> models = new ArrayList<Issue>();
		models.add(new Issue(1, "error", "Error at line number 1"));
		models.add(new Issue(3, "warning", "Error at line number 3"));
		models.add(new Issue(4, "error", "Error at line number 4"));
		models.add(new Issue(5, "error", "Error at line number 5"));
		models.add(new Issue(7, "warning", "Warning at line number 7"));
		models.add(new Issue(8, "error", "Error at line number 8"));
		models.add(new Issue(10, "warning", "Warning at line number 10"));
		return models;
	}
}
