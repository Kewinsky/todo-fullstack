# ToDo App | task_manager
The ToDo App is a task management application built with Spring Boot, React, and MySQL. It offers task creation, updates and deleting. With its powerful backend, intuitive frontend, and reliable database, the app provides an efficient and seamless task management experience.

## Features
The application includes the following features:
- CRUD operations (Create, Read, Update, Delete) for managing data
- Server-side validation of user inputs
- Database persistence using MySQL
- RESTful API endpoints for communication between the front-end and back-end
- Interactive user interface built with React

## Technologies Used:
- Java Spring Boot: A Java-based framework for building robust and scalable web applications.
- React: A JavaScript library for building user interfaces.
- MySQL: A relational database management system.
- HTML/CSS: Used for structuring and styling the user interface.

## Prerequisites
To run the application locally, you need to have the following installed:
- Java Development Kit (JDK) version 8 or higher
- Node.js and npm (Node Package Manager)
- MySQL Server

## Installation
To install and run the application, follow these steps:
1. Clone the repository to your local machine.
```
git clone https://github.com/your-username/todo-fullstack.git
```

2. Set up the database.
Create a new MySQL database and note down the database name, username, and password.

Open the [`application.properties`](https://github.com/Kewinsky/todo-fullstack/blob/main/backend/src/main/resources/application.properties) file in the Spring Boot project and update the following properties with your database credentials:
```
spring.datasource.url=jdbc:mysql://localhost:3306/your-database-name
spring.datasource.username=your-username
spring.datasource.password=your-password
```

3. Install the necessary dependencies.
- Navigate to the backend project directory.
```
cd backend
```
- Install the required dependencies using Maven.
```
mvn install
```
- Navigate to the frontend project directory.
```
cd ../frontend
```
- Install the required dependencies using npm.
```
npm install
```

4. Build and run the application.
- Build the Spring Boot application.
```
mvn clean install
```
- Start the Spring Boot server.
```
mvn spring-boot:run
```
- In a separate terminal, start the React development server.
```
npm start
```

5. Access the application.
Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view and interact with the application.

## Directory Structure
The repository is organized as follows:
- backend: Contains the Java Spring Boot application.
- frontend: Contains the React front-end application.
