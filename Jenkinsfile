pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run dev'
            }
        }
    }
//  post {
//      always {
//          script {
//              // Configuración del remitente y destinatarios
//              emailext (
//                  subject: "Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
//                  body: """<p>Build ${env.JOB_NAME} #${env.BUILD_NUMBER} finished with status: ${currentBuild.currentResult}</p>
//                           <p>Check console output at <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
//                  to: 'mcardeans@ucol.mx',
//                  from: 'mcardenas@ucol.mx',
//              )
//          }
//      }
//         success {
//             script {
//                 // Notificación en caso de éxito
//                 emailext (
//                     subject: "SUCCESS: Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
//                     body: """<p>Build ${env.JOB_NAME} #${env.BUILD_NUMBER} finished successfully.</p>
//                              <p>Check console output at <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
//                     to: 'mcardenas@ucol.mx',
//                     from: 'mcardenas@ucol.mx',
//                 )
//             }
//         }
//         failure {
//             script {
//                 // Notificación en caso de fallo
//                 emailext (
//                     subject: "FAILURE: Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
//                     body: """<p>Build ${env.JOB_NAME} #${env.BUILD_NUMBER} failed.</p>
//                              <p>Check console output at <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
//                     to: 'mcardenas@ucol.mx',
//                     from: 'mcardenas@ucol.mx',
//                 )
//             }
//         }
//  }
}
