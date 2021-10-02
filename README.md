# Digital-Equipment-Manager
## Development Workflow
### UI Application
Install npm, node, angular, and ionic globally.
To install all packages, run `$ npm i` at projectFolder/digital-equipment-manager-ui. 
Start the app with `$ npm start` within the same directory and navigate to http://localhost:4200

## To build Docker
You have to use linux or git bash for this section!

Create a folder called mysql somewhere in your filesystem. e.g. at <yourUser>/AppData/mysql.
In your user home folder, create a .bash_profile with
the env variable:
`# digital-equipment-manager
export MYSQLPATH=~/AppData/mysql` where the path must match your created folder.
If you use your IntelliJ integrated console, you should also put the env variable in the settings of IntelliJ.

For building and starting docker, change to dir with `$ cd server/scripts` and execute `$ ./redeploy.sh`.
For stopping them, you run `$ docker-compose down`.

