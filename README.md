# Digital-Equipment-Manager
## Run the Automated Tests
To install all packages, run `$ npm i` at projectFolder/digital-equipment-manager-ui.
Install Yarn with `$ npm i -g yarn`
Start the automated tests with `$ yarn cy`. Tests are running on every push in Git Actions


### Run and build server
You have to use linux or git bash for this section!
Install Docker(for Windows, you will need a WSL2 Linux kernel installed)

#### Building the image and start container
For building and starting docker, change to the scripts folder with `$ cd server/scripts` and execute `$ ./redeploy.sh`.
For stopping them, you run `$ docker-compose down`.

Navigate to http://localhost:3000, or with your servers ip like http://192.168.0.xx:3000
Click on "Verbindungseinstellungen" and setup the IP of your server.

## Development Workflow
### Run UI application in developer mode
Install npm, node, angular, and ionic globally.
To install all packages, run `$ npm i` at projectFolder/digital-equipment-manager-ui.
Start the app with `$ npm start` within the same directory and navigate to http://localhost:4200
