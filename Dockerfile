# Stage 1: Build the frontend
FROM node:18 as frontend-builder
WORKDIR /app/frontend
COPY src/main/frontend/package*.json ./
RUN npm install
COPY src/main/frontend ./
RUN npm run build

# Stage 2: Build the backend with Node.js and Gradle
FROM gradle:8.7-jdk21 as backend-builder

# Install Node.js and npm
USER root
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

WORKDIR /app
COPY . .
RUN gradle build -x test

# Stage 3: Bundle and run the application
FROM openjdk:21-jdk-slim
WORKDIR /app

# Copy backend JAR
COPY --from=backend-builder /app/build/libs/*.jar app.jar

# Copy frontend build to static resources
COPY --from=frontend-builder /app/frontend/dist /app/src/main/resources/static

# Expose port 8080 for the Spring Boot application
EXPOSE 8080

# Start the Spring Boot application
CMD ["java", "-jar", "/app/app.jar"]
