pipeline {
  agent any
  stages {
    stage('development') {
      steps {
        bat 'cd frontend && npm install && npm run dev'
      }
    }

    stage('production') {
      steps {
        bat 'cd backend && npm install && npm start'
      }
    }

  }
}