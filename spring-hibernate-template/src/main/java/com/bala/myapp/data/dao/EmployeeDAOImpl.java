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
		Session session = openSession();
		session.beginTransaction();
		Query query = session.createQuery("from Employee");
		List<Employee> employees = query.list();
		session.getTransaction().commit();
		session.close();
		return employees;
	}

	public List<Employee> getAll(String searchStr) {

		if (searchStr == null || searchStr.length() == 0) {
			return getAll();
		}
		Session session = openSession();
		session.beginTransaction();
		Query query = session.createQuery("from Employee e where lower(e.firstName) like :searchStr");
		query.setParameter("searchStr", "%" + searchStr.toLowerCase() + "%");
		List<Employee> employees = query.list();
		session.getTransaction().commit();
		session.close();
		return employees;
	}

	public Employee create(Employee emp) {
		Session session = openSession();
		session.beginTransaction();
		session.persist(emp);
		session.getTransaction().commit();
		session.close();
		return emp;
	}

	public Employee get(String id) {
		Session session = openSession();
		session.beginTransaction();
		Employee emp = session.get(Employee.class, id);
		session.getTransaction().commit();
		session.close();
		return emp;

	}

	public Employee update(String id, Employee emp) {
		Session session = openSession();
		session.beginTransaction();
		emp.setId(id);
		session.update(emp);
		session.getTransaction().commit();
		session.close();
		return emp;
	}

	public void delete(String id) {
		Session session = openSession();
		Employee emp = session.get(Employee.class, id);
		session.beginTransaction();
		session.delete(emp);
		session.getTransaction().commit();
		session.close();
	}
}
