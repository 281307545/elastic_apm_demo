## Compose
Run docker-compose up. Compose will download the official docker containers and start Elasticsearch, Kibana, and APM Server.

## Install Agents
When Compose finishes, navigate to http://localhost:5601/app/kibana#/home/tutorial/apm.
Complete steps 4-6 to configure your application to collect and report APM data.

## Visualize
Use the APM app at http://localhost:5601/app/apm to visualize your application performance data!
When you’re done, ctrl+c will stop all of the containers.