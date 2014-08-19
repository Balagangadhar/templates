package com.bala.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.bala.model.AuthorEntity;
import com.bala.model.BookEntity;

@Transactional
public interface AuthorRepository extends JpaRepository<AuthorEntity, String> {

	List<BookEntity> findById(String id);

	List<BookEntity> findByName(String name);

	List<BookEntity> findByDescription(String description);

}
