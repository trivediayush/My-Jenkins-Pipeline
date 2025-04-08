pipeline {
    agent any

    environment {
        IMAGE_NAME = "ayusht45cyber/mynodeapp"
        IMAGE_TAG = "latest"
        CONTAINER_NAME = "mynodedemo"
        APP_PORT = "3000"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Replace with real test later
                sh 'echo "Running basic test..." && exit 0'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                    sh 'echo "$DOCKERHUB_PASS" | docker login -u "$DOCKERHUB_USER" --password-stdin'
                    sh 'docker push $IMAGE_NAME:$IMAGE_TAG'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Stopping old container if running..."
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true

                    echo "Running new container..."
                    docker run -d -p $APP_PORT:3000 --name $CONTAINER_NAME $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Build, test, push, and deploy completed successfully."
            echo "App should be running at: http://<EC2_PUBLIC_IP>:${APP_PORT}"
        }
        failure {
            echo "❌ Something went wrong. Check the pipeline logs."
        }
    }
}
