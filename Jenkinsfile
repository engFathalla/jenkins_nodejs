pipeline {
    agent { label 'node2' }
    stages {
        stage('Hello') {
            steps {
                script{
                    sh 'docker build -t node:${BUILD_TAG} . '
                    sh 'docker image ls'
                    sh 'docker tag node:${BUILD_TAG}  fathalla22/node-js:${BUILD_TAG}'
                    sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                    sh 'docker push fathalla22/node-js:${BUILD_TAG}'
                    sh 'docker run -d -p 3000:3000 node:${BUILD_TAG}'
                }
            }
        }
    }
}