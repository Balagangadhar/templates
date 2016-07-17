package com.bala;

import java.util.List;

import org.junit.Test;

import com.bala.data.EmployeeService;
import com.bala.data.entity.Employee;

public class EmployeeServiceTest {

	@Test
	public void getAll() {
		List<Employee> employees = new EmployeeService().getAll();
		System.out.println(employees);
	}

	@Test
	public void create() {
		Employee emp = new Employee();
		emp.setFirstName("William Smith");
		emp = new EmployeeService().create(emp);
		System.out.println(emp);
	}

	@Test
	public void get() {
		Employee emp = new EmployeeService().get("4dfb60c6-e899-4073-931e-773a57f631e5");
		System.out.println(emp);
	}

	@Test
	public void update() {
		Employee emp = new Employee();
		emp.setFirstName("William Smith1");
		emp = new EmployeeService().update("4dfb60c6-e899-4073-931e-773a57f631e5", emp);
		System.out.println(emp);
	}

	@Test
	public void delete() {
		new EmployeeService().delete("4dfb60c6-e899-4073-931e-773a57f631e5");
	}

}
