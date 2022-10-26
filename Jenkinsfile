pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script {
                    echo "Building in $BRANSH_NAME"
                }
            }
        }
        stage('test') {
            steps {
                script {
                    echo "Testing in $BRANSH_NAME"
                }
            }
        }
        stage('deploy') {
            steps {
                script {
                    echo "Deploying in $BRANSH_NAME"
                }
            }
        }
    }
}
