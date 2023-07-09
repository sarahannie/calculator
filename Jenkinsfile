pipeline {
  agent any
  stages {
    stage('development') {
      steps {
        bat 'cd frontend && npm install && npm install mocha chai --save-dev && npm run test && npm run lint'
      }
    }

    stage('production') {
      steps {
        bat 'cd frontend && npm run dev'
      }
    }

  }
}