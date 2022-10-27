pipeline {
    agent { label 'node2' }
    stages {
        stage('Hello') {
            steps {
                script{
                    sh 'docker build -t node:v1 . '
                    sh 'docker image ls'
                    sh 'docker tag node:v1  fathalla22/node-js:v1'
                    withCredentials([usernamePassword(credentialsId: 'docker_credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]){
                    sh 'docker login -u ${USER} -p ${PASS}' }
                    sh 'docker push fathalla22/node-js:v1'
                    sh 'docker run -d -p 3000:3000 node:v1'
                }
            }
        }
    }
}