pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Getting code from GitHub'
                checkout scm
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Build completed successfully'
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline Successful!'
        }
        failure {
            echo 'CI Pipeline Failed!'
        }
    }
}