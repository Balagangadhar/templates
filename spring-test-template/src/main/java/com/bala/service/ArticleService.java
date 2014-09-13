package com.bala.service;

import java.util.ArrayList;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.bala.domain.Article;

@Service
public class ArticleService {
	private final static Logger logger = LoggerFactory
			.getLogger(ArticleService.class);

	public ArrayList<Article> getAll() {
		logger.info("getAll : entry");
		ArrayList<Article> models = new ArrayList<Article>();

		for (int i = 0; i < 10; i++) {
			models.add(new Article(String.valueOf(UUID.randomUUID()), "name"
					+ String.valueOf(i), "description" + String.valueOf(i)));
		}
		logger.info("getAll : exit");
		return models;
	}

	public Article get(String id) {
		// TODO Update article by id
		logger.info("get : entry");
		Article articleUpdated = new Article(String.valueOf(id), "name"
				+ "Sample Name", "description" + "Sample Description");
		logger.info("get : exit");
		return articleUpdated;
	}

	public Article create(Article article) {
		// TODO Create article, generate id and send it back
		logger.info("create : entry");
		Article articleCreated = new Article(String.valueOf(UUID.randomUUID()),
				"name" + article.getName(), "description"
						+ article.getDescription());
		logger.info("create : exit");
		return articleCreated;
	}

	public Article update(String id, Article article) {
		// TODO Update article by id
		logger.info("update : entry");
		Article articleUpdated = new Article(String.valueOf(id), "name"
				+ article.getName(), "description" + article.getDescription());
		logger.info("update : exit");
		return articleUpdated;
	}

	public String delete(String id) {
		// TODO Delete article by id
		String message = "Article " + id + "Deleted";
		return message;
	}

}
