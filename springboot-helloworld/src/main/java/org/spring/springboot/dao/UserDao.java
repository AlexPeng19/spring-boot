package org.spring.springboot.dao;

import org.spring.springboot.util.DBUtils;

public class UserDao {

	public static void addUser() {
		DBUtils.getConnection();
	}

}
