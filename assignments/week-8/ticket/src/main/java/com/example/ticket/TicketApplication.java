package com.example.ticket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.autoconfigure.DataSourceAutoConfiguration;

// Standard:
// @SpringBootApplication

// Hack: Tells Spring to temporarily ignore database auto-configuration
// @SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})

@SpringBootApplication
public class TicketApplication {
	public static void main(String[] args) {
		SpringApplication.run(TicketApplication.class, args);
	}
}
