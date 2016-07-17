package com.bala.myapp.data.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.bala.myapp.data.entity.Employee;

@Component
@Transactional
public class EmployeeDAOImpl extends AbstractDAO {

	@SuppressWarnings("unchecked")
	public List<Employee> getAll() {
		Session session = getCurrentSession();
		session.beginTransaction();
		Query query = session.createQuery("from Employee");
		List<Employee> employees = query.list();
		session.getTransaction().commit();
		session.close();
		return employees;
	}

	public Employee create(Employee emp) {
		Session session = getCurrentSession();
		session.beginTransaction();
		session.persist(emp);
		session.getTransaction().commit();
		session.close();
		return emp;
	}

	public Employee get(String id) {
		Session session = getCurrentSession();
		session.beginTransaction();
		Employee emp = session.get(Employee.class, id);
		session.getTransaction().commit();
		session.close();
		return emp;

	}

	public Employee update(String id, Employee emp) {
		Session session = getCurrentSession();
		session.beginTransaction();
		emp.setId(id);
		session.update(emp);
		session.getTransaction().commit();
		session.close();
		return emp;
	}

	public void delete(String id) {
		Session session = getCurrentSession();
		Employee emp = session.get(Employee.class, id);
		session.beginTransaction();
		session.delete(emp);
		session.getTransaction().commit();
		session.close();
	}
}
