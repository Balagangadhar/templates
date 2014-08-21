package com.bala.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bala.model.AuthorEntity;
import com.bala.model.BookEntity;
import com.bala.repository.AuthorRepository;
import com.bala.repository.BookRepository;

@Service
public class AuthorService {
	@Autowired
	private AuthorRepository authorRepository;

	@Autowired
	private BookRepository bookRepository;

	public AuthorEntity create(AuthorEntity authorEntity) {
		return authorRepository.save(authorEntity);
	}

	public AuthorEntity get(String id) {
		return authorRepository.findOne(id);
	}

	public List<AuthorEntity> getAll() {
		return authorRepository.findAll();
	}

	public AuthorEntity update(String id, AuthorEntity authorEntity) {
		return authorRepository.saveAndFlush(authorEntity);
	}

	public void delete(String id) {
		AuthorEntity author = authorRepository.findOne(id);
		if (author != null) {
			Set<BookEntity> books = author.getBooks();
			if (books != null && books.size() > 0) {
				for (BookEntity bookEntity : books) {
					Set<AuthorEntity> authors = bookEntity.getAuthors();
					authors.remove(author);
					bookEntity.setAuthors(authors);
					bookRepository.save(bookEntity);
				}
			}
			authorRepository.save(author);
		}

		authorRepository.delete(id);
	}

	public List<AuthorEntity> findByName(String name) {
		return authorRepository.findByName(name);
	}

	public List<AuthorEntity> findById(String id) {
		return authorRepository.findById(id);
	}

	public List<AuthorEntity> findByDescription(String description) {
		return authorRepository.findByDescription(description);
	}
}
