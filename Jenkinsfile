pipeline {
    agent any

    tools { nodejs "Node 16" }

    options {
        buildDiscarder(logRotator(artifactNumToKeepStr: "5"))
        copyArtifactPermission('/*-AniList-Node');
    }

    stages {
        stage('Prepare') {
            environment {
                projVersion = sh(script: 'npm pkg get version | sed "s/^.//g" | sed "s/.$//"', , returnStdout: true).trim()
                gitRevision = '${GIT_REVISION,length=6}'
                buildCount = '${BUILD_NUMBER}'
            }
            steps {
                buildName "${projVersion}.${buildCount}.${gitRevision}"              
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run eslint'
            }
        }
        stage('Build') { 
            steps {
                sh 'npm run docs'

                script {
                    zip zipFile: "anilist-node-built-${BUILD_NUMBER}.zip", archive: false, dir: 'docs'
                }

                archiveArtifacts artifacts: "anilist-node-built-${BUILD_NUMBER}.zip", fingerprint: true, followSymlinks: false, onlyIfSuccessful: true
            }
        }
    }
}