# Tindev
A project developed to learn the Nodejs with Express

This project has the MongoDB as it database and Mongoose as it ODM
Here I'm using the api of the github

## How it works:
### Routes

    - POST '/devs'
        - In this route is expected the username in the requisition body
        - Here the username will be registered in the database
    - GET '/devs'
        - In this route is expected the user id in the requisition header
        - Here all the users will be showed less the liked and disliked ones
    - POST '/devs/:devId/likes'
        - In this route is expected the logged user id in the requistion header and the target user id in the url params
        - Here will be saved the target user id in the likes array of the logged user
    - POST '/devs/:devId/dislikes'
        - In this route is expected the logged user id in the requistion header and the target user id in the url params
        - Here will be saved the target user id in the dislikes array of the logged user