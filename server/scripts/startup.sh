#!/bin/bash
echo "############# Welcome to the Digital Equipment Management server #################"
echo "############# Starting Docker container #################"
cd ..
echo shutting down container
docker-compose down
docker-compose up -d
cd scripts && ./executeSQLStatements.sh
echo everything done
