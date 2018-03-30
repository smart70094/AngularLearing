package com.Angular.StaffData;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class StaffRowMapper implements RowMapper{

	@Override
	public Object mapRow(ResultSet resultSet, int index) throws SQLException {
		Staff staff=new Staff();
		staff.setStaff_id(resultSet.getInt("staff_id"));
		staff.setName(resultSet.getString("name"));
		
		return staff;
	}
		
		

}
