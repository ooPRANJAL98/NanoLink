# -----------------------------
# Stage 1 - Build the application
# -----------------------------
FROM eclipse-temurin:21-jdk-alpine AS build

WORKDIR /app

# Copy Maven wrapper
COPY .mvn .mvn
COPY mvnw .
RUN chmod +x mvnw

# Copy Maven configuration
COPY pom.xml .

# Download dependencies
RUN ./mvnw dependency:go-offline

# Copy source code
COPY src src

# Build the application
RUN ./mvnw clean package -DskipTests

# -----------------------------
# Stage 2 - Run the application
# -----------------------------
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["sh","-c","java -jar app.jar --server.port=${PORT:-8080}"]
