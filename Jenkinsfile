
pipeline {
    agent any
    environment{
        NODE_ENV = 'production'
        APP_NAME = 'MyApp'
    }
    parameters{
        choice(
        name:'DEPLOY_ENV',  
        choices:['Development','Staging','Production'],
        description:'Select the deployment environment'
    )
         booleanParam(name: 'RUN_TESTS', defaultValue: true, description: 'Run tests before deployment')
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Application Name: ${APP_NAME}"
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
            when {
                expression{
                    params.RUN_TESTS == true
                }
            }
            steps {
                echo 'Executing application tests'
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo "Build for ${params.DEPLOY_ENV} environment"
                bat 'echo Build completed successfully'
            }
        }
        stage("package-Application"){
            steps{
                echo "creating package application"
                bat 'if not exist dist mkdir dist'
                bat 'copy package.json dist\\package.json'
                bat 'copy app.js dist\\app.js'
                archiveArtifacts artifacts:'dist/**',fingerprint:true    
            } 
        }
        stage('production deploy demo'){
            when{
                expression{
                    params.DEPLOY_ENV == 'Production'
                }
            }
            steps{
                echo 'Deploying to production environment'
                
            }
        }
        stage('non-production deploy demo'){
            when{
                expression{
                    params.DEPLOY_ENV != 'Production'
                }
            }
            steps{
                echo "Deploying to ${params.DEPLOY_ENV} environment"
                
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
