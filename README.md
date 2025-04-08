Jenkins CI/CD Pipeline for Node.js App
======================================

📌 Project Overview
-------------------

This project demonstrates a simple Continuous Integration and Continuous Deployment (CI/CD) pipeline using **Jenkins** for a **Node.js application**. It automatically builds, tests, and pushes the Docker image to DockerHub whenever new code is pushed to the GitHub repository.

🛠️ Tools & Technologies
------------------------

*   Jenkins
*   Node.js & npm
*   Docker
*   DockerHub
*   GitHub
*   Ubuntu (EC2 Instance)

📂 Folder Structure
-------------------

project-root/
├── Jenkinsfile
├── Dockerfile
├── app.js
├── package.json
├── README.md

🚀 Workflow Explained
---------------------

1.  **Push to GitHub:** You push code to the GitHub repository.
2.  **Jenkins Trigger:** Jenkins is configured to pull from the GitHub repo and start the pipeline.
3.  **Pipeline Stages:**

*   **Checkout:** Pulls code from the GitHub repo.
*   **Install Dependencies:** Runs `npm install` to install project dependencies.
*   **Test:** Executes `npm test` to run test cases (optional).
*   **Docker Build:** Builds a Docker image using the Dockerfile.
*   **Docker Push:** Pushes the image to DockerHub under your repository.

🔧 Jenkinsfile Summary
----------------------

The `Jenkinsfile` defines the CI/CD pipeline. It includes multiple stages: `Checkout`, `Install`, `Test`, `Docker Build`, and `Docker Push`. Each stage is executed on the Jenkins server inside the workspace.

📦 DockerHub Integration
------------------------

The final Docker image is tagged and pushed to **DockerHub** repository: `ayusht45cyber/myjenkinscicd:latest`. You can use this image to deploy your Node.js app anywhere Docker is supported.

🧑‍💻 Author
------------

**Ayush Trivedi**

✅ Final Notes
-------------

*   Make sure Node.js and Docker are installed on your Jenkins EC2 instance.
*   Configure your GitHub repo and DockerHub credentials in Jenkins properly.
*   This setup helps automate deployment, saving time and reducing manual errors.
