package com.bala.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bala.model.BookEntity;
import com.bala.repository.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepository;

	public BookEntity create(BookEntity bookEntity) {
		return bookRepository.save(bookEntity);
	}

	public BookEntity get(String id) {
		return bookRepository.findOne(id);
	}

	public List<BookEntity> getAll() {
		return bookRepository.findAll();
	}

	public BookEntity update(String id, BookEntity bookEntity) {
		return bookRepository.save(bookEntity);
	}

	public void delete(String id) {
		bookRepository.delete(id);
	}

	public List<BookEntity> findByName(String name) {
		return bookRepository.findByName(name);
	}

	public List<BookEntity> findById(String id) {
		return bookRepository.findById(id);
	}

	public List<BookEntity> findByDescription(String description) {
		return bookRepository.findByDescription(description);
	}
}
