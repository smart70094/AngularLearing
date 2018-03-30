package com.Angular.StaffData;

import java.util.List;
import org.springframework.jdbc.core.RowMapperResultSetExtractor;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;


public class AngularDao {
	private NamedParameterJdbcTemplate jdbcTemplate;
	
	public NamedParameterJdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(NamedParameterJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@SuppressWarnings("unchecked")
	public List findAll() {
		
		List results = (List) jdbcTemplate.query(
				"SELECT * FROM dbo.Table_1",
				new RowMapperResultSetExtractor(new StaffRowMapper()));
		
		return results;
    }
	
	public void insert(Staff staff) {
		String sql="insert into dbo.Table_1 values(:staff_id,:name)";
		SqlParameterSource params=new BeanPropertySqlParameterSource(staff);
		KeyHolder keyHolder=new GeneratedKeyHolder();
		jdbcTemplate.update(sql, params,keyHolder);
		
		int index=keyHolder.getKey().intValue();
		
		System.out.println(index);
	}
}
