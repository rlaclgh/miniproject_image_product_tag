FROM gradle:jdk21-alpine AS builder
WORKDIR /app
COPY build.gradle settings.gradle ./
COPY src ./src
RUN gradle clean build --no-daemon --exclude-task test

FROM openjdk:21-slim
WORKDIR /app

COPY --from=builder /app/build/libs/*.jar /app/app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar", "--spring.profiles.active=prod"]

