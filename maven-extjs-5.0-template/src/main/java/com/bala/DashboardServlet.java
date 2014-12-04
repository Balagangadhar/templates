package com.bala;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.codehaus.jackson.map.ObjectMapper;

import com.bala.vo.TreeNode;

public class DashboardServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		Map<String, String> propertyMap = getPropertyMap();
		InputStream treeStructureFile = getServletContext()
				.getResourceAsStream("/treeStructure.json");

		String treeStructureJsonString = IOUtils.toString(treeStructureFile);
		TreeNode treeNode = mapper.readValue(treeStructureJsonString,
				TreeNode.class);
		updateTreeNodeStatusFromPropertyMap(treeNode, propertyMap);

		mapper.writeValue(out, treeNode);
	}

	private String updateTreeNodeStatusFromPropertyMap(TreeNode treeNode,
			Map<String, String> propertyMap) {
		String status = null;
		List<TreeNode> childNodes = treeNode.getChildren();
		if (childNodes != null && childNodes.size() > 0) {
			for (TreeNode childNode : childNodes) {
				status = getEffectiveStatus(
						status,
						updateTreeNodeStatusFromPropertyMap(childNode,
								propertyMap));
			}
		} else {
			status = propertyMap.get(treeNode.getId());
		}
		treeNode.setStatus(status);
		return status;
	}

	private String getEffectiveStatus(String status, String childStatus) {

		if (status == null) {
			return childStatus;
		}
		if (childStatus != null) {
			if (status.equals("true") && childStatus.equals("true")) {
				return "true";
			} else if (status.equals("false") || childStatus.equals("false")) {
				return "false";
			}
		} else {
			return status;
		}
		return null;
	}

	private Map<String, String> getPropertyMap() {
		Properties prop = new Properties();
		Map<String, String> propertyMap = new HashMap<>();
		try {
			prop.load(getServletContext().getResourceAsStream(
					"/dashboard.properties"));
		} catch (IOException e1) {
			return propertyMap;
		}
		Enumeration<?> e = prop.propertyNames();
		while (e.hasMoreElements()) {
			String key = (String) e.nextElement();
			String status = null;
			String value = prop.getProperty(key);
			if (key != null && value != null) {
				if (value.equals("0")) {
					status = "false";
				} else if (value.equals("1")) {
					status = "true";
				} else {
					status = null;
				}
			} else {
				status = null;
			}
			propertyMap.put(key, status);
		}
		return propertyMap;
	}

}
