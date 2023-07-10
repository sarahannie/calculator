pipeline {
  agent any
  stages {
    stage('development') {
      steps {
        bat 'cd frontend && npm install && npm install mocha chai --save-dev && npm run test'
      }
    }

    stage('production') {
      steps {
        echo 'Ready for production'
        bat 'cd frontend && docker run --publish 8000:8000 calc'
      }
    }

  }
}