pipeline {
    agent { label 'node2' }
    stages {
        stage('build') {
            steps {
                script {
                    echo "Building in $BRANCH_NAME"
                }
            }
        }
        stage('test') {
            steps {
                script {
                    echo "Testing in $BRANCH_NAME"
                }
            }
        }
        stage('deploy') {
            steps {
                script {
                    echo "Deploying in $BRANCH_NAME"
                }
            }
        }
    }
}
