pipeline {
  agent any
  stages {
    stage('development') {
      steps {
        echo 'develop'
        sh '''cd frontend
npm install 
npm install mocha chai --save-dev 
npm run test'''
      }
    }

    stage('production') {
      steps {
        echo 'Ready for production'
      }
    }

  }
}