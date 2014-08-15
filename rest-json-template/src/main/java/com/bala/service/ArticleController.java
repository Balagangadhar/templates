package com.bala.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.UUID;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.bala.domain.Article;

@Path("/article")
public class ArticleController {

	/**
	 * URL Template : http://localhost:8080/Rest-JSON-Template/action/article/
	 * 
	 * @return Response Object
	 */
	@GET
	@Path("/")
	@Produces("application/json")
	public Response getAll() {
		// TODO get List of articles
		ArrayList<Article> models = new ArrayList<Article>();
		for (int i = 0; i < 10; i++) {
			models.add(new Article(String.valueOf(UUID.randomUUID()), "name" + String.valueOf(i), "description" + String.valueOf(i)));
		}
		return Response.status(200).entity(models).build();
	}

	/**
	 * URL Template : http://localhost:8080/Rest-JSON-Template/action/article/1234
	 * 
	 * @return Response Object
	 */
	@GET
	@Path("{id}")
	@Produces("application/json")
	public Response getArticle(@PathParam("id") String id) {
		// TODO get article by id
		Article article = new Article(String.valueOf(UUID.randomUUID()), "name" + String.valueOf(id), "description" + String.valueOf(id));
		return Response.status(200).entity(article).build();
	}

	/**
	 * URL Template : http://localhost:8080/Rest-JSON-Template/action/article/
	 * 
	 * @return Response Object
	 */
	@POST
	@Path("/")
	@Consumes("application/json")
	public Response createTrackInJSON(String articleData) throws JsonParseException, JsonMappingException {
		// TODO Create article, generate id and send it back
		ObjectMapper mapper = new ObjectMapper();
		Article article = null;
		try {
			article = mapper.readValue(articleData, Article.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Article articleCreated = new Article(String.valueOf(UUID.randomUUID()), "name" + article.getName(), "description" + article.getDescription());
		return Response.status(201).entity(articleCreated).build();

	}

	/**
	 * URL Template : http://localhost:8080/Rest-JSON-Template/action/article/1234
	 * 
	 * @return Response Object
	 */
	@PUT
	@Path("{id}")
	@Consumes("application/json")
	public Response updateArticle(@PathParam("id") String id, String articleData) {
		// TODO Update article by id
		ObjectMapper mapper = new ObjectMapper();
		Article article = null;
		try {
			article = mapper.readValue(articleData, Article.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Article articleUpdated = new Article(String.valueOf(id), "name" + article.getName(), "description" + article.getDescription());
		return Response.status(200).entity(articleUpdated).build();

	}

	/**
	 * URL Template : http://localhost:8080/Rest-JSON-Template/action/article/1234
	 * 
	 * @return Response Object
	 */
	@DELETE
	@Path("{id}")
	@Consumes("application/json")
	public Response updateArticle(@PathParam("id") String id) {
		// TODO Delete article by id
		return Response.status(200).build();
	}
}
