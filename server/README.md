# Vikingz Backend
## 1.Install Docker
Windows
- Install [Docker Desktop](https://docs.docker.com/docker-for-windows/install/) for Windows
- Verify if Docker is installed checking it version
    ```
    PS C:\Users\username> docker --version
    ```
- ✨Magic  with commands✨ at the wiki (You must read the entire document against read the wiki of the project)

Linux
- Install [Docker Engine](https://docs.docker.com/engine/install/ubuntu/) for Ubuntu/Debian
- You need to uninstall old version (recommendable)
    ```
    sudo apt-get remove docker docker-engine docker.io containerd runc
    ```
- Set up the repository
    ```
    sudo apt-get update -y \
    sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
    ```
- Adding Docker's official GPG key
    ```
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    ```
- Verify if Docker is installed checking it version
    ```
    docker --version
    ```
    or
    ```
    sudo docker --version
    ```
## 2. Project Initiation

Run the following command to init the project
```
npm init -y
```
## 3. Configuring the TypeScript Compiler
```
npm install -g typescript
```
```
tsc --init
```
## 4. Dependencies

```
npm install express express-validator bcryptjs mongoose concurrently dotenv jsonwebtoken 
```
and
```
npm install -D nodemon
npm install -D ts-node
```

To the typescript's support dependencies:
```
npm i @types/express
npm i @types/bcryptjs
npm i @types/jsonwebtoken
```

## 5. Dockerfile
To setup our Dockerfile we must define how will be our workspace and the porperties that we'll manage:

- We want to use a Node.js image
- We need to create inside the container's system our workdir path
- Specify our work directory
- Install the project's dependencies
- Copy our project;s structure in a docker's container
- Specify a port
- Define a CMD command to init our app (script in our package.json)

    ```
    FROM node:latest
    RUN mkdir -p /usr/src/app
    WORKDIR /usr/src/app
    COPY package.json ./
    RUN npm install
    COPY . . 
    EXPOSE 3000
    CMD ["npm","run","dev"]
    ```

Useful commands: 

### Image Command List
- Create our image
    ```
    docker build <path>  
    ej: docker build .
    ```
- Visualize image list   
    ```
    docker image ls
    ```
- Remove image by Id
    ```
    docker image rm <image_id>
    ```
- Remove all images
    ```
    docker rmi $(docker images -aq) 
    ```
### Container Command List
**1. Creating**
- Create a container by image's name
    ```
    docker build -t [image_name] .
    ```
**2. Visualize**
- Visualize container list
    ```
    docker container ls
    ```
- Visualize container list(stopped or not)
    ```
    docker ps -a
    ```
- Visualize container's ids
    ```
    docker ps -aq
    ```
**3. Start and Stop**
- Start a stopped container
    ```
     docker start [id_contenedor]
    ```
- Stop more then one container instances
    ```
    docker stop $(docker ps -aq)
    ```
**4. Remove**    
- Remove container with it image
    ```
    docker rm [container_name] -f
    ```
- Remove container with it image
    ```
    docker rm $(docker ps -aq) -f
    ```
### Init our Image
- Run command with Parameters
    ```
    docker
        run
        -d
        -p [localhost port]:[container port]
        --name [container_name]
        -v [path_to_folder_on_location] : [path_to_folder_on_container]
            - windows command shell -> %cd%
            - windows powershell ---> ${pwd}
            - mac/linux ------------> $(pwd)
        -v /app/node_modules
        to prevent bind mount from overwriting
        –env-file=[path to .env]
        [image_name]
        
    ```
## 6. Docker compose
To init both of our server and database images at the same time, we can use the following command:
```
sudo docker-compose up
```
or if we want to stop service
```
sudo docker-compose stop
```