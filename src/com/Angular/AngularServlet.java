package com.Angular;


import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.Angular.StaffData.AngularDao;
import com.Angular.StaffData.Staff;


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
		
		@SuppressWarnings("unchecked")
		
		Staff staff=new Staff();
		staff.setStaff_id(1111);
		staff.setName("www");
		
		angularDao.insert(staff);
		
		/*
		List<Staff> list=angularDao.findAll();
		for(Staff s:list) 
			System.out.println(s.getStaff_id()+" : "+s.getName());
		*/
		
		
		/*
		try {
			//String cmd=request.getParameter("command");
			String cmd="findAll";
			
			List<Map<String,Object>> entries=process(cmd,request,response);
			
			//如果有result，則回傳result(json)
			if(entries!=null) {
				
				JSONArray jsonArray=returnResponse(entries);
			
				//test result
				//System.out.println(jsonArray.toString(0));
				
				
				response.setContentType("application/json");
			    response.setCharacterEncoding("UTF-8");
			    response.getWriter().print(jsonArray);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(e.toString());
		}
		
		*/
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

	private List<Map<String,Object>> process(String cmd,HttpServletRequest request,HttpServletResponse response) {
		List<Map<String,Object>> result=null;
		switch(cmd) {
			case "findAll":
				result=findAll(request,response);
				break;
			case "update":
				update(request,response);
				break;
		}
		return result;
	}
	
	private List<Map<String,Object>> findAll(HttpServletRequest request,HttpServletResponse response) {
		List entries =angularDao.findAll();
		return entries;
	}
	
	private void update(HttpServletRequest request,HttpServletResponse response) {
		int staff_id=Integer.parseInt(request.getParameter("staff_id"));
		String name=request.getParameter("name");
		
		Staff staff=new Staff();
		staff.setStaff_id(staff_id);
		staff.setName(name);
		
		angularDao.insert(staff);
	}
	
	private JSONArray returnResponse(List<Map<String,Object>> entries) {
		JSONArray jsonArray=new JSONArray();
		
		for(Map<String,Object> map:entries) {
			
			JSONObject jsonObj=new JSONObject();
			
			for(Map.Entry<String,Object> entry : map.entrySet()) {
				
				String key=entry.getKey();
				Object value=entry.getValue();
				
				try {
					jsonObj.put(key, value);
				}catch(Exception e) {
					System.out.println(e.toString());
				}
				
			}
			
			jsonArray.put(jsonObj);
			
		}
		
		return jsonArray;
	}
	
}
