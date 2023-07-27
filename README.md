# Tokopedia Play Clone (BE)

This project is a cloning project of the backend of the [Tokopedia Play](https://www.tokopedia.com/play/channels) website. This project was created as part of the MID term assignment given by Generasi Gigih 3.0, a program of Yayasan Anak Bangsa Bisa. The focus of making this project is only on the backend side, not covering the frontend.

**Created By** :

- Muhamad Putra Satria
- Fullstack Engineer
- GG3FSGP0442

## Table of Contents

- [Database Structure](#database-structure)
- [API Structure](#api-structure)
- [API Requests and Responses](#api-requests-and-responses)
- [How to Run Locally](#how-to-run-locally)

## Database Structure 

Here is an overview of the database structure based on the Tokopedia Play project.

![Structure Database](public/Skema_Database.png)

## API Structure 

### Auth User
- Register User
    ```
    POST /register
    ```
- Login User
    ```
    POST /login
    ```
### Thumbnail

- Get all thumbnails
  ```
  GET /thumbnail
  ```
- Details of a specific thumbnail
  ```
  GET /thumbnail/{id_thumb}
  ```
- Create a new thumbnail - (Private Route)
  ```
  POST /thumbnails
  ```
- Update an existing thumbnail - (Private Route)
  ```
  PUT /thumbnails/{id_thumb}
  ```
- Delete a thumbnail - (Private Route)
  ```
  DELETE /thumbnails/{id_thumb}
  ```

### Product

- Get all products
  ```
  GET /product
  ```
- Details of a specific product
  ```
  GET /product/{id_product}
  ```
- Create a new product - (Private Route)
  ```
  POST /product/{id_thumb}
  ```
- Update an existing product - (Private Route)
  ```
  PUT /product/{id_product}
  ```
- Delete a product - (Private Route)
  ```
  DELETE /product/{id_product}
  ```

### Comment

- Get all comments
  ```
  GET /comment
  ```
- Create a new comment - (Private Route)
  ```
  POST /comment
  ```
- Delete a comment - (Private Route)
  ```
  DELETE /comments/{id_comment}
  ```

### Authentication

The private routes for creating, updating, and deleting resources require authentication. Make sure to include a valid JSON Web Token (JWT) in the Authorization header of your requests.

## API Requests and Responses

### Auth User

- **POST /register** 
    - URL Params
    ``None``
    - Headers
    ``Content-Type: application/json``
    - Body JSON
        ```
        {
            "username": <String>,
            "password": <String>
        }
        ```
    - Success Response - 200
        ```
        {
            "message": "User Berhasil Terdaftar!",
            "result": {
                "username": <String>,
                "password": <String>,
                "_id": <ObjectId>
                "__v": 0
            }
        }
        ```
    - Error Response
        409
        ```
        { 
            "message": 'Username sudah ada, Masukkan username yang berbeda!'
        }
        ```
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```
- **POST /login**
    - URL Params
    ``none``
    - Headers
    ``none``
    - Body JSON
        ```
        {
            "username": <String>,
            "password": <String>
        }
        ```
    - Success Response - 200
        ```
        {
            "message": 'Login Berhasil Yeyy!', 
            "username": <String>,
            "tokenUser": <String>Token
        }
    - Error Response
        401
        ```
        {
            "message": 'Kesalahan Username! / Password!'
        }
        ```
        500
        ```
        { 
            "message": "Terjadi Kesalahan Server!" 
        }
        ```

### Thumbnail
- **GET /thumbnail** 
    - URL Params
    ``None``
    - Headers
    ``Content-Type: application/json``
    - Success Response - 201
        ```
        {
            "message": "Berhasil Mendapatkan Data!",
            "data": [
                {
                    "_id": <ObjectId>,
                    "title": <String>,
                    "url_video": <String>,
                    "url_img": <String>,
                    "__v": 0
                }
        }
        ```
    - Error Response
        404
        ```
        { 
            "message": "Tidak Terdapat Data!", 
            "data": []
        }
        ```
        500
        ```
        {
            message: "Terjadi Kesalahan Server!"
        }
        ```
- **GET /thumbnail/{id_thumb}** 
    - URL Params
    ``id_thumb``
    - Headers
    ``Content-Type: application/json``
    - Success Response - 201
        ```
        {
            "message": "Berhasil Mendapatkan Data!",
            "data": {
                "_id": <ObjectId>,
                "title": <String>,
                "url_video": <String>,
                "url_img": <String>,
                "__v": 0
            }
        }
        ```
    - Error Response
        404
        ```
        { 
            "message": `Data tidak ditemukan dengan ID {id_thumb}` 
        }
        ```
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```
- **POST /thumbnail** 
    - URL Params
    ``none``
    - Headers
    ``Content-Type: application/json``
    ``Authorization: Bearer <Token>``
    - Body JSON
        ```
        {
            "title": <String>,
            "url_img": <String>,
            "url_video": <String>,
        }
        ```
    - Success Response - 201
        ```
        {
            "message": "Berhasil Menambahkan Thumbnail!",
            "data": {
                "title": <String>,
                "url_img": <String>,
                "url_video": <String>,
                "_id": <String>,
                "__v": 0
            }
        }
        ```
    - Error Response
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```
- **PUT /thumbnail/{id_thumb}** 
    - URL Params
    ``id_thumb``
    - Headers
    ``Content-Type: application/json``
    ``Authorization: Bearer <Token>``
    - Body JSON
        ```
        {
            "title": <String>,
            "url_img": <String>,
            "url_video": <String>,
        }
        ```
    - Success Response - 201
        ```
        {
            "message": "Berhasil Merubah Data!",
            "data": {
                "_id": <String>,
                "title": <String>,
                "url_img": <String>,
                "url_video": <String>,
                "__v": 0
            }
        }
        ```
    - Error Response
        404
        ```
        { 
            "message": `Data tidak ditemukan dengan ID {id_thumb}` 
        }
        ```
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```
- **DELETE /thumbnail/{id_thumb}** 
    - URL Params
    ``id_thumb``
    - Headers
    ``Content-Type: application/json``
    ``Authorization: Bearer <Token>``
    - Success Response - 201
        ```
        {
            "message": "Berhasil menghapus Data dengan ID {id_thumb}",
            "deletedData": {
                "_id": "64c1ea456426c7a31cc2e625",
                "title": "Makan Yukkk!",
                "url_video": "https://hwbdhad.com",
                "url_img": "asdasdsafsfafsfasf",
                "__v": 0
            }
        }
        ```
    - Error Response
        404
        ```
        { 
            "message": `Data tidak ditemukan dengan ID {id_thumb}` 
        }
        ```
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```
### Product
- **GET /product** 
    - URL Params
    ``None``
    - Headers
    ``Content-Type: application/json``
    - Success Response - 201
        ```
        {
            "message": "Berhasil Mendapatkan Data!",
            "data": [
                {
                    "_id": <ObjectId>,
                    "id_thumbnail": <String>,
                    "title": <String>,
                    "link_product": <String>,
                    "price": <Number>,
                    "desc_product": <String>,
                    "__v": 0
                }
            ]
        }
        ```
    - Error Response
        404
        ```
        { 
            "message": "Tidak Terdapat Data!", 
            "data": []
        }
        ```
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```
- **GET /product/{id_product}** 
    - URL Params
    ``id_product``
    - Headers
    ``Content-Type: application/json``
    - Success Response - 201
        ```
        {
            "message": "Berhasil Mendapatkan Data!",
            "data": {
                "_id": <ObjectId>,
                "id_thumbnail": <String>,
                "title": <String>,
                "link_product": <String>,
                "price": <Number>,
                "desc_product": <String>,
                "__v": 0
            }
        }
        ```
    - Error Response
        404
        ```
        { 
            "message": `Data tidak ditemukan dengan ID {id_thumb}` 
        }
        ```
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```
- **POST /product/{id_thumb}** 
    - URL Params
    ``id_thumb``
    - Headers
    ``Content-Type: application/json``
    ``Authorization: Bearer <Token>``
    - Body JSON
        ```
        {
            "title": <String>,
            "link_product": <String>,
            "price": <Number>,
            "desc_product": <String>,
        }
        ```
    - Success Response - 201
        ```
        {
            "message": "Berhasil Menambahkan Product!",
            "data": {
                "_id": <ObjectId>,
                "id_thumbnail": <String>,
                "title": <String>,
                "link_product": <String>,
                "price": <Number>,
                "desc_product": <String>,
                "__v": 0
            }
        }
        ```
    - Error Response
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```
- **PUT /product/{id_product}** 
    - URL Params
    ``id_thumb``
    - Headers
    ``Content-Type: application/json``
    ``Authorization: Bearer <Token>``
    - Body JSON
        ```
        {
            "title": <String>,
            "link_product": <String>,
            "price": <Number>,
            "desc_product": <String>,
        }
        ```
    - Success Response - 201
        ```
        {
            "message": "Berhasil Merubah Data!",
            "data": {
                "_id": <ObjectId>,
                "id_thumbnail": <String>,
                "title": <String>,
                "link_product": <String>,
                "price": <Number>,
                "desc_product": <String>,
                "__v": 0
            }
        }
        ```
    - Error Response
        404
        ```
        { 
            "message": `Data tidak ditemukan dengan ID {id_product}` 
        }
        ```
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```
- **DELETE /product/{id_product}**
    - URL Params
    ``id_thumb``
    - Headers
    ``Content-Type: application/json``
    ``Authorization: Bearer <Token>``
    - Success Response - 201
        ```
        {
            "message": "Berhasil menghapus Data dengan ID {id_product}",
            "deletedData": {
                "_id": <ObjectId>,
                "id_thumbnail": <String>,
                "title": <String>,
                "link_product": <String>,
                "price": <Number>,
                "desc_product": <String>,
                "__v": 0
            }
        }
        ```
    - Error Response
        404
        ```
        { 
            "message": `Data tidak ditemukan dengan ID {id_product}` 
        }
        ```
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```

### Comment
- **GET /comment** 
    - URL Params
    ``None``
    - Headers
    ``Content-Type: application/json``
    - Success Response - 201
        ```
        {
            "message": "Berhasil Mendapatkan Data!",
            "data": [
                {
                    "_id": <ObjectId>,
                    "id_thumbnail": <ObjectId>,
                    "username": <String>,
                    "comment": <String>,
                    "time_stamp": <Date>,
                    "__v": 0
                }
            ]
        }
        ```
    - Error Response
        404
        ```
        { 
            "message": "Tidak Terdapat Data!", 
            "data": []
        }
        ```
        500
        ```
        {
            message: "Terjadi Kesalahan Server!"
        }
        ```
- **POST /comment/{id_thumb}**
    - URL Params
    ``id_thumb``
    - Headers
    ``Content-Type: application/json``
    ``Authorization: Bearer <Token>``
    - Body JSON
        ```
        {
            "comment": <String>,
        }
        ```
    - Success Response - 201
        ```
        {
            "message": "Berhasil Menambahkan Comment!",
            "data": {
                "_id": <ObjectId>,
                "id_thumbnail": <ObjectId>,
                "username": <String>,
                "comment": <String>,
                "time_stamp": <Date>,
                "__v": 0
            }
        }
        ```
    - Error Response
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```
- **DELETE /comment/{id_comment}**
    - URL Params
    ``id_comment``
    - Headers
    ``Content-Type: application/json``
    ``Authorization: Bearer <Token>``
    - Success Response - 201
        ```
        {
            "message": "Berhasil menghapus Data dengan ID {id_comment}",
            "deletedData": {
                "_id": <ObjectId>,
                "id_thumbnail": <ObjectId>,
                "username": <String>,
                "comment": <String>,
                "time_stamp": <Date>,
                "__v": 0
            }
        }
        ```
    - Error Response
        404
        ```
        { 
            "message": `Data tidak ditemukan dengan ID {id_comment}` 
        }
        ```
        500
        ```
        {
            "message": "Terjadi Kesalahan Server!"
        }
        ```

## How to run locally
**Prerequisites**
- Download Node.js from the official website: [Node](https://nodejs.org/)
- Download VSCode from the official website: [VSCode](https://code.visualstudio.com/)
- Download Mongodb Compass or Mongodb Shell: [Compass](https://www.mongodb.com/try/download/compass) [Shell](https://www.mongodb.com/try/download/shell)

**Steps**
- Clone this repo
    ```
    git clone https://github.com/mpsalunggg/MidTerm-TokpedPlayClone.git
    ```
- Change into the project directory
    ```
    cd MidTerm-TokpedPlayClone
    ```
- Install project dependencies using npm
    ```
    npm install
    ```
- Configure MongoDB with mongoshell
    - Make sure MongoDB is installed and running on your system.
        ```
        mongosh --host localhost --port <port>
        ```
    - Create a new database and note down its connection URL (Mongodb Compass).
- Set up environment variables
    - Create a new file named .env in the root directory of the project.
    - Add the following environment variables to the .env file:
        ```
        DB_MONGO=<your_mongodb_url>
        PORT=<your_running_port>
        SECRET_KEY=<your_secretkey>
        ```
- Run the application
    ```
    npm run start
    ```
