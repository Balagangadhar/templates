package com.bala.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.bala.model.ArticleEntity;

@Transactional
public interface ArticleRepository extends JpaRepository<ArticleEntity, String> {

	List<ArticleEntity> findById(String id);

	List<ArticleEntity> findByName(String name);

	List<ArticleEntity> findByDescription(String description);

}
