package com.bala;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.bala.myapp.data.entity.Employee;
import com.bala.myapp.service.EmployeeService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath*:spring-context-data.xml" })
public class EmployeeServiceTest {

	@Autowired
	private EmployeeService employeeService;

	@Test
	public void getAll() {
		List<Employee> employees = employeeService.getAll();
		System.out.println(employees);
	}

	@Test
	public void create() {
		Employee emp = new Employee();
		emp.setFirstName("William Smith");
		emp = employeeService.create(emp);
		System.out.println(emp);
	}

	@Test
	public void get() {
		Employee emp = employeeService.get("4dfb60c6-e899-4073-931e-773a57f631e5");
		System.out.println(emp);
	}

	@Test
	public void update() {
		Employee emp = new Employee();
		emp.setFirstName("William Smith1");
		emp = employeeService.update("4dfb60c6-e899-4073-931e-773a57f631e5", emp);
		System.out.println(emp);
	}

	@Test
	public void delete() {
		employeeService.delete("4dfb60c6-e899-4073-931e-773a57f631e5");
	}

}
