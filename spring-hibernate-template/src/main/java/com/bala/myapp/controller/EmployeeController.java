package com.bala.myapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bala.myapp.data.entity.Employee;
import com.bala.myapp.service.EmployeeService;

@RestController
@RequestMapping(value = EmployeeController.BASE_URL)
public class EmployeeController {
	protected final static String BASE_URL = "/employee";

	@Autowired
	private EmployeeService employeeService;

	/**
	 * URL Template :
	 * http://localhost:8080/spring-hibernate-template/api/employee/
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<Employee> getAll() {
		return employeeService.getAll();
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-hibernate-template/api/employee/1234
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Employee getEmployee(@PathVariable("id") String id) {
		return employeeService.get(id);
	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-hibernate-template/api/employee/
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public Employee create(@RequestBody Employee emp) {
		return employeeService.create(emp);

	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-hibernate-template/apid/employee/1234
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public Employee updateEmployee(@PathVariable("id") String id, @RequestBody Employee emp) {
		return employeeService.update(id, emp);

	}

	/**
	 * URL Template :
	 * http://localhost:8080/spring-hibernate-template/api/employee/1234
	 * 
	 * @return Response Object
	 */
	@RequestMapping(value = "/", method = RequestMethod.DELETE)
	public void deleteEmployee(@PathVariable("id") String id) {
		employeeService.delete(id);
	}
}
