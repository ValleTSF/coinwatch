# Coinwatch 

Coinwatch consists of both a server and a client, both must be configured correctly in order
for the application to work properly. Follow the steps below to get it running.

Environment variables have been exposed for demo purposes. This practice should not be present in commercial applications.

# First Step
The first step is to clone the project, you can achieve this by standing in your preferred folder and running:
```
git clone https://github.com/ValleTSF/coinwatch.git
```

# Server
For the server to start correctly, you must have ts-node installed globally you can achieve this by running:
```
npm install -g ts-node
```
In the server package you must also create a .env file. Path: coinwatch/server/.env.
In the .env file add these lines:
```
NODE_ENV=development
COINAPI_HOST=https://rest.coinapi.io
COINAPI_API_KEY=94C3CE84-2FF6-4795-9B28-97325DE713C5
```

before running the server make sure to run:
```
npm install
```

after that make sure you're in the server package and start the server by running:
```
npm start
```


# Client
For the client to start correctly, you must have expo installed globally, you can achieve this by running:
```
npm install --global expo-cli
```
after that make sure you're in the client package and start the client by running:
```
expo start
```
