pipeline {
    agent { label 'node2' }
    stages {
        stage('Hello') {
            steps {
                docker build -t node:$BUILD_TAG .
                docker image ls
                docker tag node:$BUILD_TAG  fathalla22/node-js:$BUILD_TAG
                docker login -u $USERNAME -p $PASSWORD
                docker push fathalla22/node-js:$BUILD_TAG
                docker run -d -p 3000:3000 node:$BUILD_TAG
            }
        }
    }
}