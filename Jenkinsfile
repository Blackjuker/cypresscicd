pipeline{
    agent{
        docker{
            image 'cypress/browsers'
            args '--entrypoint=""'
        }
    }
    stages{
        stage("verifier que npm fonctionne"){
            steps{
                sh 'npm --version'
            }
        }
        stage("lancer mes test"){
            steps {
                sh 'npx cypress run'
            }
        }
    }
}