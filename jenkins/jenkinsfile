pipeline {
    agent {
        label 'docker' // Run pipeline on an agent with Docker support
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from Git repository
                git 'https://github.com/WarrenG123/calculator'
            }
        }
        stage('Build Frontend') {
            steps {
                // Build frontend component
                sh 'cd frontend && npm install' // Install frontend dependencies
                sh 'cd frontend && npm run dev' // Build frontend assets
            }
        }
        stage('Build Backend') {
            steps {
                // Build backend component
                sh 'cd backend && npm install --production' 
                sh 'cd backend && node app.js ' 
            }
         }
        // stage('Test') {
        //     steps {
        //         // Run tests for frontend and backend
        //         sh 'cd frontend && npm run test' // Run frontend tests
        //         sh 'cd backend && ./gradlew test' // Run backend tests
        //     }
        // }
        // stage('Containerize') {
        //     steps {
        //         // Build Docker images for frontend and backend
        //         sh 'cd frontend && docker build -t frontend-image .' // Build frontend image
        //         sh 'cd backend && docker build -t backend-image .' // Build backend image
        //     }
        // }
        // stage('Deploy') {
        //     steps {
        //         // Deploy frontend and backend containers using Docker Compose
        //         sh 'docker-compose up -d' // Start containers defined in docker-compose.yml
        //     }
        // }
        // stage('Post-deployment') {
        //     steps {
        //         // Perform post-deployment actions, such as smoke tests or notifications
        //         // ...
        //     }
        // }
        // stage('Cleanup') {
        //     steps {
        //         // Cleanup temporary resources or artifacts
        //         // ...
        //     }
        // }
    }
}
