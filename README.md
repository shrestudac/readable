# Readable Project 

Readable project for Udacity React Nanodegree program.

A content and comment web application. Users are able to post content to three categories: React, Redux, or Udacity. Users can comment on their posts and other users' posts, and vote on posts and comments. Users can also edit and delete posts and comments. Users can sort posts by time and vote score.


# Running the Project

To install and launch the project

* To clone the project enter `git clone https://github.com/shrestudac/readable.git` into terminal
* Go into the cloned folder
* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server.js`
* The server will run on https://localhost:3001
     
* Open another terminal window, and go into cloned folder   
* Install and start the frontend (in the new window)
    - `cd frontend`
    - `npm install`
    - `npm run start`
* The server will run on https://localhost:3000

### What You're Getting
```bash
├── README.md
├── api-server
|   ├── README.md
|   ├── package.json
|   ├── package-lock.json 
|   ├── node_modules
|   ├── config.js
|   ├── categories.js
|   ├── comments.js
|   ├── posts.js
|   └── server.js
|    
└── frontend
    ├── README.md
    ├── package.json
    ├── package-lock.json 
    ├── node_modules
    ├── public
    └── src
        ├── App.css
        ├── App.test.js
        ├── actions
        │   ├── category.js
        │   ├── comment.js
        │   ├── post.js
        │   └── types.js
        ├── components
        │   ├── App.js
        │   ├── ListPosts.js
        │   ├── comment
        │   │   ├── EditComment.js
        │   │   ├── NewComment.js
        │   │   └── PostComment.js
        │   └── post
        │       ├── EditPost.js
        │       ├── NewPost.js
        │       ├── PostDetail.js
        │       └── SinglePost.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── reducers
        │   └── index.js
        ├── registerServiceWorker.js
        └── utils
            ├── API.js
            └── Utils.js
```


