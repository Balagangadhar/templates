package com.bala.myapp.data.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

public class AbstractDAO {

	@Autowired
	SessionFactory sessionFactory;

	protected Session openSession() {
		return sessionFactory.openSession();
	}

}
