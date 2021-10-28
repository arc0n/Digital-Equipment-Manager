#!/bin/bash
echo "############# Welcome to the Digital Equipment Management server #################"
echo using - $MYSQLPATH - as path to persitance data, please ensure the variable is set
echo "############# Starting Docker container #################"
cd ..
echo shutting down container
docker-compose down
MYSQLPATH=$MYSQLPATH docker-compose up -d
cd scripts && ./executeSQLStatements.sh
echo everything done
