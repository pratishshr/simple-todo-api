# simple-todo-api
A simple api with basic CRUD operations for ToDo applications.

https://todo-simple-api.herokuapp.com/

## API Reference

#### Method: GET
###### Path /todos - Fetch all todos
 ```javascript
    response = {
        "data": [
            {
                "id": 1,
                "title": "Make a simple API",
                "description": "An api with node and express",
                "isComplete": false
                "createdAt": "2016-08-26T05:21:24.000Z",
                "updatedAt": "2016-08-26T05:21:24.000Z"
            },
            {
                "id": 2,
                "title": "Make a CRUD application with React",
                "description": "CRUD app using the simple todo api as the back end",
                "isComplete": false
                "createdAt": "2016-08-26T05:21:24.000Z",
                "updatedAt": "2016-08-26T05:21:24.000Z"
            }
        ]
    }
 ```
 
###### Path /todos/:todoId - Fetch todo by id
 
 ```javascript
    response = {
        "data": {
            "id": 1,
            "title": "Make a simple API",
            "description": "An api with node and express",
            "createdAt": "2016-08-26T05:21:24.000Z",
            "updatedAt": "2016-08-26T05:21:24.000Z"
        }
    }
 ```
#### Method: POST

###### Path :/todos - Create new ToDo
 ``` javascript
    request = {
        "title": "Some todo",
        "description": "description"
    }
 
    response = {
        "data": {
            "title": "Some todo",
            "description": "description",
            "createdAt": "2016-08-26T12:01:12+05:45",
            "id": 6
        }
    }
```
 

#### METHOD: PUT

###### Path: /todos/:todoId - Update ToDo
```javascript
    request = {
        "title": "Another todo",
        "description": "Another description",
        "isComplete": true
    }
```

#### Method: DELETE

###### Path: /todos/:todoId - Delete Todo
```javascript
    response = {
        "success": true
    }
```           
 
 
