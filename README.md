Link for code repository: 
https://github.com/naman270493/Kuberenetes-Demo/

Docker Image Link: 
https://hub.docker.com/r/namanagrawal270493/nagp-api-service

URL for Service API tier to view the records from backend tier: 
http://34.42.200.168:8080/users
http://postgress-headless:5432
Link for screen recording video: 
https://nagarro-my.sharepoint.com/personal/naman_agrawal_nagarro_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fnaman%5Fagrawal%5Fnagarro%5Fcom%2FDocuments%2FRecording%2D20240608%5F235526%2Ewebm&nav=%7B%22defaultNavPanel%22%3A%7B%22pluginName%22%3A%22MediaSettingsLayer%22%7D%7D&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E75f4ccc0%2D6802%2D442c%2Db04b%2D2745315daed9


NAGP Kubernetes Demo Details
- To run K8 set up, deploy all yaml files over kuberneets cluster
        kubectl apply -f postgres-configmap.yml
        kubectl apply -f api-configmap.yml
        kubectl apply -f postgres-secret.yml
        kubectl apply -f api-secret.yml
        kubectl apply -f postgres-service.yml
        kubectl apply -f api-service.yml
        kubectl apply -f postgres-stateful.yml
        kubectl apply -f api-deployment.yml
        kubectl apply -f postgres-pv.yml
        kubectl apply -f postgres-pvc.yml
- To run node set up, navigate to /node-api folder and run npm start
- To run dockerfile, docker build -t <image-name> and push to dockerhub. And to redeploy follow below steps.
    docker build -t nagp-api-service:latest .
    docker tag nagp-api-service:latest namanagrawal270493/nagp-api-service:latest
    docker push namanagrawal270493/nagp-api-service:latest
    kubectl rollout restart deployment api-deployment
    kubectl logs api-deployment-74699f8765-v24ql
- To check if database is persistent
    kubectl port-forward api-deployment-74699f8765-v24ql 31546:31546
    POSTGRES_POD=$(kubectl get pods -l app=postgres  -o jsonpath='{.items[0].metadata.name}')
    kubectl exec -it $POSTGRES_POD -- psql -U myuser -d mydatabase -c "SELECT * FROM users;"
    kubectl delete pod postgres-0
- To add dummy data into users table
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        age INT
    );

    INSERT INTO users (name, email, age) VALUES ('John Doe', 'john.doe@example.com', 30);
    INSERT INTO users (name, email, age) VALUES ('Jane Smith', 'jane.smith@example.com', 25);