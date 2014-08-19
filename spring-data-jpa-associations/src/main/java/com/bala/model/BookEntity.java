package com.bala.model;

import java.util.Collection;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "BOOK")
public class BookEntity {

	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name = "ID")
	private String id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "DESCRIPTION")
	private String description;

	@ManyToMany(fetch = FetchType.EAGER)
	Set<AuthorEntity> authors;

	@OneToMany(fetch = FetchType.EAGER)
	Set<PageEntity> pages;

	@ManyToOne(fetch = FetchType.EAGER)
	PublisherEntity bookEntity;

	public String getId() {
		return id;
	}

	public PublisherEntity getBookEntity() {
		return bookEntity;
	}

	public void setBookEntity(PublisherEntity bookEntity) {
		this.bookEntity = bookEntity;
	}

	public Collection<AuthorEntity> getAuthors() {
		return authors;
	}

	public Set<PageEntity> getPages() {
		return pages;
	}

	public void setPages(Set<PageEntity> pages) {
		this.pages = pages;
	}

	public void setAuthors(Set<AuthorEntity> authors) {
		this.authors = authors;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}