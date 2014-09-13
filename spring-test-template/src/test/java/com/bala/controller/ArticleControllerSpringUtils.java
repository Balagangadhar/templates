package com.bala.controller;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.bala.service.ArticleService;

public class ArticleControllerSpringUtils {

	private AnnotationConfigApplicationContext appCtx;

	@Before
	public void initializeAnnotationContext() {
		appCtx = new AnnotationConfigApplicationContext();
	}

	@Test
	public void testSampleMethod() {

		initializeAnnotationContext();
		appCtx.register(ArticleService.class);
		appCtx.register(ArticleController.class);
		appCtx.refresh();

		ArticleController articleController = appCtx
				.getBean(ArticleController.class);
		System.out.println(articleController.getAll());

	}
}
