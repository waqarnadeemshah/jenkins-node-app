
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting code from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies'
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Executing application tests'
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Build process started'
                bat 'echo Build completed successfully'
            }
        }
    }

    post {
        success {
            echo 'Congratulations! Pipeline completed successfully.'
        }

        failure {
            echo 'Pipeline failed. Please check the error.'
        }
    }
}
