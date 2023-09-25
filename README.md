# WorkOut Buddy

## Description: 
**Web-App to keep record of workout of each user based on entry by the user.**
---

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Docker](https://www.docker.com/get-started)
- [NodeJS (LTS)](https://www.nodejs.com)

## Tech Stack
- **Development**
   - Frontend: React
   - Backend: Node.js, Express and Mongodb
- **DevOps**
    - CI/CD: Github Actions
    - Containerization: 
    
## Clone the Repository

You can clone this public repository using the following steps:

1. Open your terminal or command prompt.

2. Navigate to the directory where you want to clone the repository.

3. Run the following command to clone the repository:

   `https://github.com/majidshakeelshawl/WorkOutBuddy.git`

4. Navigate to cloned repo

    `cd WorkOutBuddy`

5. Run following command to install both client and server packages

    `npm run install`

## Run the app using Docker

Once you've cloned the repository, you can run the Dockerized React app using the following steps:

1. Build the Docker image:

    `docker build -t [Any tag name that you like] .`
    
    **`Eg: docker build -t react-app .`**

2. Run the Docker container:

    `docker run -p 3000:3000 [Tag name]`

    **`Eg: docker run -p 3000:3000 react-app`**

3. Open your web browser and access the app at http://localhost:3000.



