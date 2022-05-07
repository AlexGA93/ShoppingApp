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
npm install express express-validator bcryptjs mongoose concurrently dotenv jsonwebtoken helmet morgan
```
and 
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env

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

### package.json
Define commands scrpts to:
    - Convert development code to production
    - Start server in development mode
    ```
    "scripts": {
        "dev": "nodemon src/index.ts --exec babel-node",
        "start": "node build/index.ts"
    },
    ```
With this orders we can do the following actions:
- Generate code in development mode
```
npm run dev
```
- Generate code to deploy after production
```
npm run start
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

- To build our project on docker compose
    ```
    sudo docker-compose build
    ```
- To set up our project 
    ```
    sudo docker-compose up
    ```

- Or if we want to stop service
    ```
    sudo docker-compose down
    ```
## 7. JWT
We're going to apply jwt middleware for user's validation and routes protection. First of all we need to know that our application will use a generated string called **token**. This token will ve signed in every operation that we need. For example in sign in or sign up a user:

```
export const signUp = async (req: Request, res: Response) => {
    try {
        // check if there is a user named as the entered one
        
        // hash password
        
        // load user info to store it
        let userInfo:apUserType = {
            ...
        }
        user = new UserModel(userInfo);

        const savedUser = await user.save();

        // sign jwt
        jwt.sign(
            { id: savedUser._id},
            config.SECRET ,
            { expiresIn: 86400 },
            (err, token) => {
                if (err) throw err;

                // return token
                res.status(200).send({token});

                return; 
        });


    } catch (err: any) {
        console.error(err.message);
        res.status(500).send("Error during Registration process");
    }
};
```
We can see that our token will be 'generated' with the user's id, a string called 'secret' and a number as expiration (in seconds). A valid example of a generated token with a login process could be:
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzE1NTY3Y2Y4YzBiZDQzNmE5OThhZiIsImlhdCI6MTY1MTYwNTY1NSwiZXhwIjoxNjUxNjA1NzU1fQ.ESH6IwzfzE15ovgF0LIQTedYHq4ofONFGVimruX6e6I"
}
```
This process is the same for a registration action. But, why is our code returning a string? That will be pass throught a validation process at the moment we access to another route that will need a user's information.

In the login process our app will load the user's dashboard once we have been logged in. For this reload, our server must have sent the login token and been validated.

- 1. Log in route
```
dbRouter.post('/signin', userMethods.signIn);
```
- 2. We obtain a token
```
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzE1NTY3Y2Y4YzBiZDQzNmE5OThhZiIsImlhdCI6MTY1MTYwNTY1NSwiZXhwIjoxNjUxNjA1NzU1fQ.ESH6IwzfzE15ovgF0LIQTedYHq4ofONFGVimruX6e6I"
```
- 3. Load a protected route that will need a token validation
```
import { verifyToken } from '../middleware/authJWT';
dbRouter.put('/username/:id', verifyToken, userMethods.editBasicInfo);
```
- 4. Validation process
```
export const verifyToken = async (
    req: Request, 
    res: Response, 
    next: NextFunction
    ) => {
        const token: RequestType = req.headers;
        // check headers
        let secret = config.SECRET;
        
        //check if there's token
        if(!token) res.status(403).json({message:"No token provided"});
        
        // check if there's a valid token extracting token's info        
        let {id} = jwt.verify((token['x-access-token'] ?? ''), secret) as decodedType;
        
        // check if user exists by id
        const user = await UserModel.findById(id, {password:0});
        
        if(!user) return res.status(404).json({message:'user not found'})
        
        // pass to the next route
        next();
        
}
```