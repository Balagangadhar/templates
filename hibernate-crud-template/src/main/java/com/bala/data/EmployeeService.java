package com.bala.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;

import com.bala.data.entity.Employee;
import com.bala.util.HibernateUtil;

public class EmployeeService {

	public List<Employee> getAll() {
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();
		Query<Employee> query = session.createQuery("from Employee", Employee.class);
		List<Employee> employees = query.getResultList();
		session.getTransaction().commit();
		session.close();
		return employees;
	}

	public Employee create(Employee emp) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();
		session.persist(emp);
		session.getTransaction().commit();
		session.close();
		return emp;
	}

	public Employee get(String id) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();
		Employee emp = session.get(Employee.class, id);
		session.getTransaction().commit();
		session.close();
		return emp;

	}

	public Employee update(String id, Employee emp) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();
		emp.setId(id);
		session.update(emp);
		session.getTransaction().commit();
		session.close();
		return emp;
	}

	public void delete(String id) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Employee emp = session.get(Employee.class, id);
		session.beginTransaction();
		session.delete(emp);
		session.getTransaction().commit();
		session.close();
	}
}
