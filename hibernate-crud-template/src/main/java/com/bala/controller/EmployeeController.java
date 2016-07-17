package com.bala.controller;

import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.bala.data.EmployeeService;
import com.bala.data.entity.Employee;

@Path("employee")
public class EmployeeController {

	private EmployeeService employeeService;

	public EmployeeController() {
		employeeService = new EmployeeService();
	}

	/**
	 * URL Template :
	 * http://localhost:8080/hibernate-crud-template/api/employee/
	 * 
	 * @return Response Object
	 */
	@GET
	@Path("/")
	@Produces("application/json")
	public Response getAll() {
		return Response.status(200).entity(employeeService.getAll()).build();
	}

	/**
	 * URL Template :
	 * http://localhost:8080/hibernate-crud-template/api/employee/1234
	 * 
	 * @return Response Object
	 */
	@GET
	@Path("{id}")
	@Produces("application/json")
	public Response getEmployee(@PathParam("id") String id) {
		return Response.status(200).entity(employeeService.get(id)).build();
	}

	/**
	 * URL Template :
	 * http://localhost:8080/hibernate-crud-template/api/employee/
	 * 
	 * @return Response Object
	 */
	@POST
	@Path("/")
	@Consumes("application/json")
	public Response create(String employeeData) throws JsonParseException, JsonMappingException {
		ObjectMapper mapper = new ObjectMapper();
		Employee emp = null;
		try {
			emp = mapper.readValue(employeeData, Employee.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return Response.status(201).entity(employeeService.create(emp)).build();

	}

	/**
	 * URL Template :
	 * http://localhost:8080/hibernate-crud-template/apid/employee/1234
	 * 
	 * @return Response Object
	 */
	@PUT
	@Path("{id}")
	@Consumes("application/json")
	public Response updateEmployee(@PathParam("id") String id, String employeeData) {
		ObjectMapper mapper = new ObjectMapper();
		Employee emp = null;
		try {
			emp = mapper.readValue(employeeData, Employee.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return Response.status(200).entity(employeeService.update(id, emp)).build();

	}

	/**
	 * URL Template :
	 * http://localhost:8080/hibernate-crud-template/api/employee/1234
	 * 
	 * @return Response Object
	 */
	@DELETE
	@Path("{id}")
	@Consumes("application/json")
	public Response deleteEmployee(@PathParam("id") String id) {
		return Response.status(200).build();
	}
}
