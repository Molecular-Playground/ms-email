# ms-email
A microservice for sending emails.

All installation is done automatically through docker. If you do not have docker installed, install [here](https://docs.docker.com/engine/installation/).

## Important Setup Instructions
1. Copy `config.json.example` to a new file called `config.json`.
2. Change the `gmailPassword` field to the correct password that you've been given.

### To Run (Production)
The easiest way to run for production is to use the docker-compose file that can be found [here](https://github.com/molecular-playground/molecular-playground). It is possible however to run the container manually. From inside docker virtual machine, navigate to the top directory of this repository and enter the following commands:
```
docker build -t email .
docker run -d --name email -p 3000:3000 email
```

This will run your container 'detached'. To kill the container, type in ```docker kill email```.

### To Run (Development)
The easiest way to develop using the docker container is to mount your working directory as a volume. From inside docker virtual machine, navigate to the top directory of this repository. Enter the following commands:
```
docker build -t email .
docker run --name email -p 3000:3000 -v $PWD:/src email
# where $PWD is a variable to your current directory and may need changing if you are using a windows environment
```

This will run your container 'attached' and leave you in your source directory. All changes you make on your host machine (in this directory) will be present in your container. Run ```npm install``` and ```npm start``` in your container to test, just as if you were only using your host machine. To kill the container from inside the container, type in ```exit```.
