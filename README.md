# Digital-Equipment-Manager
## Development Workflow
### Run UI application
Install npm, node, angular, and ionic globally.
To install all packages, run `$ npm i` at projectFolder/digital-equipment-manager-ui. 
Start the app with `$ npm start` within the same directory and navigate to http://localhost:4200

### Run and build server
You have to use linux or git bash for this section!

Create a folder "mysql" somewhere in your filesystem, e.g. at <yourUser>/AppData/mysql.

#### Setting the env variables
In your user home folder, create a .bash_profile with the env variable:
`# digital-equipment-manager
export MYSQLPATH=~/AppData/mysql` where the path must match your created folder.
If you use your IntelliJ integrated console, you should also put the env variable in the settings of IntelliJ.

#### Building the image and start container
For building and starting docker, change to dir with `$ cd server/scripts` and execute `$ ./redeploy.sh`.
For stopping them, you run `$ docker-compose down`.

