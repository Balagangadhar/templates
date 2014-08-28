package com.bala.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bala.model.ArticleEntity;
import com.bala.repository.ArticleRepository;

@Service
public class ArticleService {
	@Autowired
	private ArticleRepository articleRepository;

	public ArticleEntity create(ArticleEntity articleEntity) {

		
		return articleRepository.save(articleEntity);
	}

	public ArticleEntity get(String id) {
		return articleRepository.findOne(id);
	}

	public List<ArticleEntity> getAll() {
		return articleRepository.findAll();
	}

	public ArticleEntity update(String id, ArticleEntity articleEntity) {
		return articleRepository.save(articleEntity);
	}

	public void delete(String id) {
		articleRepository.delete(id);
	}

	public List<ArticleEntity> findByName(String name) {
		return articleRepository.findByName(name);
	}

	public List<ArticleEntity> findById(String id) {
		return articleRepository.findById(id);
	}

	public List<ArticleEntity> findByDescription(String description) {
		return articleRepository.findByDescription(description);
	}
}
