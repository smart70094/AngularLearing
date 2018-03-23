package com.Angular;

import java.util.List;
import java.util.Map;
import org.springframework.jdbc.core.JdbcTemplate;


public class AngularDao {
	private JdbcTemplate jdbcTemplate;

	AngularDao(){}
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@SuppressWarnings("unchecked")
	public List<Map<String, Object>> findAll() {  
		List<Map<String, Object>> results = 
			    (List<Map<String, Object>>) jdbcTemplate.queryForList(
			        "SELECT * FROM dbo.Table_1");
		return results;
    }
	
	void update(String... dataList) {
		jdbcTemplate.update(
				"insert into dbo.Table_1 (staff_id,name) values(?,?)",
				dataList[0],dataList[1]);
	}
}
