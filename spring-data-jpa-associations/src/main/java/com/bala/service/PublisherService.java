package com.bala.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bala.model.BookEntity;
import com.bala.model.PublisherEntity;
import com.bala.repository.BookRepository;
import com.bala.repository.PublisherRepository;

@Service
public class PublisherService {
	@Autowired
	private PublisherRepository publisherRepository;

	@Autowired
	private BookRepository bookRepository;

	public PublisherEntity create(PublisherEntity publisherEntity) {
		return publisherRepository.save(publisherEntity);
	}

	public PublisherEntity get(String id) {
		return publisherRepository.findOne(id);
	}

	public List<PublisherEntity> getAll() {
		return publisherRepository.findAll();
	}

	public PublisherEntity update(String id, PublisherEntity publisherEntity) {
		return publisherRepository.saveAndFlush(publisherEntity);
	}

	public void delete(String id) {
		PublisherEntity publisher = publisherRepository.findOne(id);
		Set<BookEntity> books = publisher.getBooks();
		if (books != null && books.size() > 0) {
			for (BookEntity bookEntity : books) {
				bookEntity.setPublisherEntity(null);
				bookRepository.save(bookEntity);
			}
		}
		publisherRepository.delete(id);
	}

	public List<PublisherEntity> findByName(String name) {
		return publisherRepository.findByName(name);
	}

	public List<PublisherEntity> findById(String id) {
		return publisherRepository.findById(id);
	}

	public List<PublisherEntity> findByDescription(String description) {
		return publisherRepository.findByDescription(description);
	}
}
