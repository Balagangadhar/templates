package com.bala.myapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bala.myapp.data.dao.EmployeeDAOImpl;
import com.bala.myapp.data.entity.Employee;

@Service
//@Transactional
public class EmployeeService {

	@Autowired
	private EmployeeDAOImpl employeeDAOImpl;

	public List<Employee> getAll() {
		return employeeDAOImpl.getAll();
	}

	public Employee get(String id) {
		return employeeDAOImpl.get(id);
	}

	public Employee create(Employee emp) {
		return employeeDAOImpl.create(emp);
	}

	public Employee update(String id, Employee emp) {
		return employeeDAOImpl.update(id, emp);
	}

	public void delete(String id) {
		employeeDAOImpl.delete(id);
	}

}
