package org.spring.springboot.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.esgyn.dbmgr.agent.hikari.HikariUtils;
import com.esgyn.dbmgr.resources.ConfigurationResource;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class DBUtils {
	
	private DBUtils() {
	}
	public static 
	public static void getConnection() {
		private static final Logger LOG = LoggerFactory
				.getLogger(HikariUtils.class);

		private static HikariConfig config = null;
		private static HikariDataSource dataSource = null;
		static{
			if (!ConfigurationResource.getIsEsgynExist()) {
				config = new HikariConfig(HikariUtils.class
						.getClassLoader().getResource("hikari.properties").getFile());
				dataSource = new HikariDataSource(config);
			}
		}
	}
	
}
