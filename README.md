# ms-email
A microservice for sending emails.

All installation is done automatically through docker. If you do not have docker installed, install [here](https://docs.docker.com/engine/installation/).

### To Run using Docker Compose (Recommended)
The easiest way to run for production is to use the docker-compose file that can be found [here](https://github.com/molecular-playground/molecular-playground). It is possible however to run the container manually. The following instructions can be used to deploy manually for both production and development environments.

### Setup
This microservice uses environment variables to make it easier to deploy at different locations. You will need to create a file named ```molecular-playground.env``` one level above this directory for deployment to work properly. The following environment variables are used in this microservice:

- ```GMAIL_USERNAME``` - The username of the gmail account you would like to use to send emails.
- ```GMAIL_PASSWORD``` - The password of the gmail account you would like to use to send emails.

Below is an example of what your ```molecular-playground.env``` should look like using the above environment variables. ```YOUR_VALUE_HERE``` is simply a placeholder for your own value.
```
GMAIL_USERNAME=YOUR_VALUE_HERE
GMAIL_PASSWORD=YOUR_VALUE_HERE
```

To make sure everything works correctly, make sure you use the same values for each microservice you are using. This can be easily done by using the same molecular-playground.env file.

### To Run (Production)
From inside docker virtual machine, navigate to the top directory of this repository and enter the following commands:
```
docker build -t email .
docker run -d --name email -p 3000:3000 --env-file ../molecular-playground.env email
```

This will run your container 'detached'. Here are some useful commands to interact with a detached container:
```
# kill a container
docker kill email

# view output
docker logs -f email

# restart a container
docker restart -t=0 email
```

### To Run (Development)
The easiest way to develop using the docker container is to mount your working directory as a volume. From inside docker virtual machine, navigate to the top directory of this repository. Enter the following commands:
```
docker build -t email .
docker run --rm -i -t -p 3000:3000 --env-file ../molecular-playground.env -v $PWD:/src email /bin/sh
# where $PWD is a variable to your current directory and may need changing if you are using a windows environment
```

This will run your container 'attached' and leave you in your source directory. All changes you make on your host machine (in this directory) will be present in your container. Run ```npm install``` and ```npm start``` in your container to test, just as if you were only using your host machine. To kill the container from inside the container, type in ```exit```.
