package com.Angular;


import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


/**
 * Servlet implementation class AngularServlet
 */
@WebServlet(urlPatterns={"/AngularServelt"})
public class AngularServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	AngularDao angularDao;   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AngularServlet() {
        super();
        ApplicationContext context = new ClassPathXmlApplicationContext("Bean.xml");
		angularDao=(AngularDao)context.getBean("angularDao");
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		try {
			String cmd=request.getParameter("command");
			process(cmd,request,response);
			
			
			
		    
		    
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(e.toString());
		}
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

	private void process(String cmd,HttpServletRequest request,HttpServletResponse response) {
		switch(cmd) {
			case "findAll":
				findAll(request,response);
				break;
			case "update":
				update(request,response);
				break;
		}
	}
	
	private void findAll(HttpServletRequest request,HttpServletResponse response) {
		List<Map<String,Object>> entries =angularDao.findAll();
		returnResponse(entries);
	}
	
	private void update(HttpServletRequest request,HttpServletResponse response) {
		String staff_id=request.getParameter("staff_id");
		String name=request.getParameter("name");
		angularDao.update(staff_id,name);
	}
	
	private void returnResponse(List<Map<String,Object>> entries) {
		/*
		response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
	    response.getWriter().print(obj);
	    */
	}
	
}
