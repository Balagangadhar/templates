package com.bala.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.bala.domain.Article;
import com.bala.service.ArticleService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration("/resources/spring/rest-servlet.xml")
public class ArticleControllerTest {

	private final static Logger logger = LoggerFactory
			.getLogger(ArticleControllerTest.class);

	@Autowired
	private WebApplicationContext wac;

	private MockMvc mockMvc;

	@InjectMocks
	private ArticleController articleControllerTest;

	// TODO Spy all the beans if you want to mock them otherwise use @Mock
	@Spy
	private ArticleService articleService;

	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void getAll() throws Exception {
		System.out.println(articleControllerTest.getAll());
	}

	@Test
	public void getAllByMockingRequest() throws Exception {
		MvcResult result = this.mockMvc.perform(
				MockMvcRequestBuilders.get("/article/").accept(
						MediaType.APPLICATION_JSON)).andReturn();
		logger.info(result.getResponse().getContentAsString());

	}

	@Test
	public void getArticleByMockingRequest() throws Exception {
		String articleId = "1";
		MvcResult result = this.mockMvc.perform(
				MockMvcRequestBuilders.get("/article/" + articleId).accept(
						MediaType.APPLICATION_JSON)).andReturn();
		System.out.println(result.getResponse().getContentAsString());

	}

	@Test
	public void putArticleByMockingRequest() throws Exception {
		String articleId = "1";
		Article article = new Article("1", "Test", "Sample Aticle");
		ObjectMapper mapper = new ObjectMapper();

		byte[] content = mapper.writeValueAsBytes(article);
		MvcResult result = this.mockMvc.perform(
				MockMvcRequestBuilders.put("/article/" + articleId)
						.accept(MediaType.APPLICATION_JSON).content(content))
				.andReturn();
		System.out.println(result.getResponse().getContentAsString());

	}

	@Test
	public void postArticleByMockingRequest() throws Exception {
		Article article = new Article("1", "Test", "Sample Aticle");
		ObjectMapper mapper = new ObjectMapper();

		byte[] content = mapper.writeValueAsBytes(article);
		MvcResult result = this.mockMvc.perform(
				MockMvcRequestBuilders.post("/article/")
						.accept(MediaType.APPLICATION_JSON).content(content))
				.andReturn();
		System.out.println(result.getResponse().getContentAsString());

	}

	@Test
	public void deleteArticleByMockingRequest() throws Exception {
		String articleId = "1";
		MvcResult result = this.mockMvc.perform(
				MockMvcRequestBuilders.delete("/article/" + articleId).accept(
						MediaType.APPLICATION_JSON)).andReturn();
		System.out.println(result.getResponse().getContentAsString());

	}
}