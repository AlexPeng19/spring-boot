package org.spring.springboot.service.impl;

import org.spring.springboot.dao.UserDao;
import org.spring.springboot.domain.User;
import org.spring.springboot.service.UserService;

public class UserServiceImpl implements UserService{

	@Override
	public Boolean registerUser(User user) {
		UserDao.addUser();
		return true;
	}

}
