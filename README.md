## Description
Created two API calls to fetch and process data from https://jsonplaceholder.typicode.com/. 

## Installation
```
npm install
```

## Usage
To start the server, run:
```
npm start
```

## APIs

- /fetch-data<br>
  + To fetch all the user data from https://jsonplaceholder.typicode.com/users.
  + url: http://localhost:3000/fetch-data

- /process-data/:postId<br>
  + To fetch all comment data from https://jsonplaceholder.typicode.com/comments and filter the comments by the postId.
  + http://localhost:3000/process-data/postId (random postId number you want to get comments of)
