pipeline{
    agent{
        docker{
            image 'cypress/browsers'
            args '--entrypoint=""'
        }
    }
    parameters {
        // Définir un paramètre de type choix pour choisir le parcours de tests
        choice(name: 'parcours', choices: ['parcour1', 'parcour2'], description: 'Sélectionner le parcours à exécuter')
        choice(name: 'cible', choices: ['smoke', 'sanity'], description: 'Sélectionner la cible des tests')
        string(name: 'tc-001', defaultValue: 'smoke', description: 'Nom du test')
    }
    stages{
        stage("verifier que npm fonctionne"){
            steps{
                sh 'npm --version'
            }
        }
         stage("verifier la version de cypress"){
            steps{
                sh 'npx cypress --version'
            }
        }
        stage("installer les dependance"){
            steps {
                sh 'npm ci'
            }
        }
        // stage("Executer les test"){
        //     steps{
        //         //sh 'npx cypress run'
        //         sh 'npx cypress run --env grepTags=@smoke'
        //         //sh 'npx cypress run --reporter junit'
        //     }
        // }
        stage("Exécuter les tests") {
            steps {
                script {
                    // Logique pour gérer les paramètres et appliquer les bons tags ou cibles
                    def tag = ""
                    if (params.cible == "smoke") {
                        tag = "@smoke"
                    } else if (params.cible == "sanity") {
                        tag = "@sanity"
                    }
                    
                    def parcours = ""
                    if (params.parcours == "parcour1") {
                        parcours = "parcour1"
                    } else if (params.parcours == "parcour2") {
                        parcours = "parcour2"
                    }
                    
                    // Exécuter Cypress avec les tags et parcours sélectionnés
                    sh "npx cypress run --env grepTags=${tag},parcours=${parcours}"
                }
            }
        }
        
    }
    post{
        always {
            //archiveArtifacts artifacts: 'cypress/reports/**/*', followSymlinks: false,
            //archiveArtifacts artifacts: 'build/libs/**/*.jar', fingerprint: true
            junit 'results/**/*.xml'
        }
    }
}