package org.spring.springboot.web;

import java.util.HashMap;
import java.util.Map;

import org.spring.springboot.domain.User;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Spring Boot HelloWorld 案例
 *
 * Created by bysocket on 16/4/26.
 */
@RestController
public class HelloWorldController {

    @RequestMapping("/hello")
    public String sayHello() {
        return "Hello,World,How are you doing, are you happy!";
    }

    @RequestMapping("/register")
    public Map<String,Object> register(@RequestBody User user) {
    	Map<String,Object> response = new HashMap<String,Object>();
    	response.put("password", user.getPassword());
    	response.put("userName", user.getUserName());
    	response.put("userName", user.getSalary());
    	System.out.println("userName:" + user.getUserName());
    	System.out.println("password:" + user.getPassword());
    	System.out.println("password:" + user.getSalary());
        return response;
    }
}
