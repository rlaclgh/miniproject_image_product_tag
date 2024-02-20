package com.rlaclgh.server;

import jakarta.annotation.PostConstruct;
import java.util.Optional;
import java.util.TimeZone;
import java.util.UUID;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	public AuditorAware<String> auditorProvider() {
		return () -> Optional.of(UUID.randomUUID().toString());
	}

	@PostConstruct
	public void init() {
		// timezone 설정
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
	}

}
