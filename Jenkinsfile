pipelines{
    agent{
        docker{
            image 'cypress/browsers'
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