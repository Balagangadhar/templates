package com.bala.controller;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping(value = FileController.BASE_URL)
public class FileController {
	protected final static String BASE_URL = "file";

	/**
	 * URL Template :
	 * http://localhost:8080/spring4-extjs-fileupload-download-template
	 * /action/file/upload/
	 * 
	 * @return Response Object
	 * @throws IOException
	 */
	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	@ResponseBody
	public String handleFileUploadConnectionSpecification(
			@RequestParam("file") MultipartFile file) throws IOException {
		final byte[] bytes = file.getBytes();
		System.out.println(bytes);
		String msg = "{\"success\" : true, \"msg\":\"Upload successful\"}";

		return msg;
	}

}
