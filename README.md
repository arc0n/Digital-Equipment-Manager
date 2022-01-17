# Digital-Equipment-Manager

### Run and build server
You have to use linux or git bash for this section!
Install Docker(for Windows, you will need a WSL2 Linux kernel installed)

#### Building the image and start container
For building and starting docker, change to the scripts folder with `$ cd server/scripts` and execute `$ ./redeploy.sh`.
For stopping them, you run `$ docker-compose down`.

Navigate to http://localhost:3000

## Development Workflow
### Run UI application in developer mode
Install npm, node, angular, and ionic globally.
To install all packages, run `$ npm i` at projectFolder/digital-equipment-manager-ui.
Start the app with `$ npm start` within the same directory and navigate to http://localhost:4200
