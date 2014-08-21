package com.bala.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.bala.model.PublisherEntity;

@Transactional
public interface PublisherRepository extends JpaRepository<PublisherEntity, String> {

	List<PublisherEntity> findById(String id);

	List<PublisherEntity> findByName(String name);

	List<PublisherEntity> findByDescription(String description);

}
