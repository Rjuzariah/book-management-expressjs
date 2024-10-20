# Express.js Book Management API

This project is an Express.js API for managing books in a library. It uses Docker and Docker Compose for containerization.

## Prerequisites

- Ensure you have Docker and Docker Compose installed on your machine. You can follow the installation instructions on the official Docker documentation:
  - [Docker Installation](https://docs.docker.com/get-docker/)
  - [Docker Compose Installation](https://docs.docker.com/compose/install/)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone <your-repository-url>
   cd <your-repository-name>

2. **Build and Start the Application::**
    Use Docker Compose to build and start the application. This will start your Express.js API and the database service defined in the docker-compose.yml file

   ```bash
   docker-compose up --build

3. **Wait for the Application to Start:**
    The first time you run the application, it may take some time for the backend to initialize. Please be patient while the necessary migrations are run and the application starts.
   
4. **Access the API:**:
   Once the application is up and running, you can access the API at:

   Base URL: http://localhost:3000
   
5. Stopping the Application
   To stop the application and remove the containers, you can use:
   ```bash
   docker-compose down


# Book Management API

This API allows you to manage books in the system. Below are the available endpoints, including their methods, request parameters, and response formats.

## Base URL : http://localhost:3000/api

## Endpoints

1. Get All Books
- **URL:** `/books`
- **Method:** `GET`
- **Query Parameters:**
  - `page`: (optional) Page number for pagination (default: `1`)
  - `limit`: (optional) Number of items per page (default: `10`)

#### Request Example:
```bash
GET /api/books?page=1&limit=10
```
#### Response:

- **Status Code:** `200 OK`
- **Body:**
```json
{
    "totalItems": 6,
    "totalPages": 1,
    "currentPage": 1,
    "books": [
        {
            "id": 2,
            "title": "1984",
            "author": "George Orwell",
            "publishedYear": 1949,
            "genre": "Dystopian",
            "description": "A story about a totalitarian regime that uses surveillance and mind control to dominate its citizens.",
            "createdAt": "2024-10-20T17:26:54.000Z",
            "updatedAt": "2024-10-20T17:26:54.000Z"
        },
        {
            "id": 4,
            "title": "Moby-Dick",
            "author": "Herman Melville",
            "publishedYear": 1851,
            "genre": "Adventure",
            "description": "The epic tale of Captain Ahab’s obsessive quest to kill the white whale, Moby-Dick.",
            "createdAt": "2024-10-20T17:26:54.000Z",
            "updatedAt": "2024-10-20T17:26:54.000Z"
        },
        {
            "id": 5,
            "title": "Pride and Prejudice",
            "author": "Jane Austen",
            "publishedYear": 1813,
            "genre": "Romance",
            "description": "A romantic novel that charts the emotional development of Elizabeth Bennet.",
            "createdAt": "2024-10-20T17:26:54.000Z",
            "updatedAt": "2024-10-20T17:26:54.000Z"
        },
        {
            "id": 6,
            "title": "The Catcher in the Rye",
            "author": "J.D. Salinger",
            "publishedYear": 1951,
            "genre": "Fiction",
            "description": "A story about teenage alienation and rebellion as seen through the eyes of Holden Caulfield.",
            "createdAt": "2024-10-20T17:26:54.000Z",
            "updatedAt": "2024-10-20T17:26:54.000Z"
        },
        {
            "id": 3,
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "publishedYear": 1925,
            "genre": "Fiction",
            "description": "A tragic story of Jay Gatsby’s love for Daisy Buchanan set in the Roaring Twenties.",
            "createdAt": "2024-10-20T17:26:54.000Z",
            "updatedAt": "2024-10-20T17:26:54.000Z"
        },
        {
            "id": 1,
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "publishedYear": 1960,
            "genre": "Fiction",
            "description": "A novel about the serious issues of rape and racial inequality in the American South.",
            "createdAt": "2024-10-20T17:26:54.000Z",
            "updatedAt": "2024-10-20T17:26:54.000Z"
        }
    ]
}
```
2. Create a New Book
- **URL:** `/books`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
  "title": "New Book Title",
  "author": "Author Name",
  "releaseYear": 2023,
  "genre": "Fiction",
  "description": "Description of the book."}
  ```
#### Request Example:
```bash
POST /api/books
```

- **Status Code:** `200 OK`
- **Body:**
```json
{
  "id": 3,
  "title": "New Book Title",
  "author": "Author Name",
  "releaseYear": 2023,
  "genre": "Fiction",
  "description": "Description of the book."
}
```

Error Response:
Status Code: 400 Bad Request
Body:
```json
{
  "message": "Failed to create book."
}
```

3. Update a Book by ID

- **URL:** `/books/:id`
- **Method:** `PUT`
- **URL Parameters:**
  - `id`: The ID of the book to update
- **Request Body:**
```json
{
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "releaseYear": 2023,
  "genre": "Non-Fiction",
  "description": "Updated description of the book."
}
```

Request Example:
```bash
PUT /api/books/1
```
Response:
Status Code: 200 OK
Body:
```json
{
  "id": 1,
  "title": "Updated Book Title",
  "author": "Updated Author Name"
}
```

Error Responses:
Status Code: 404 Not Found
Body:
```json
{
  "message": "Book not found."
}
```
Status Code: 400 Bad Request
Body:
```json
{
  "message": "Failed to update book."
}
```

5. Delete Book
- **URL:** `/books/:id`
- **Method:** `DELETE`
- **URL Parameters:**
  - `id`: The ID of the book to delete

#### Request Example: DELETE /api/books/1

#### Response:

- **Status Code:** `204 No Content`
- **Body:** (empty)

#### Error Responses:

- **Status Code:** `404 Not Found`
- **Body:**
```json
{
  "message": "Book not found."
}



   
7. Get book by Id
- **URL:** `/books/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id`: The ID of the book to retrieve

#### Request Example: 
```bash
GET /api/books/1
```

#### Response:

- **Status Code:** `200 OK`
- **Body:**
```json
{
  "id": 1,
  "title": "Book 1",
  "author": "Author 1"
}
```

Error Responses:
Status Code: 404 Not Found
Body:
```json
{
  "message": "Book not found."
}
```

Status Code: 500 Internal Server Error
Body:
```json
{
  "message": "Failed to retrieve book."
}
```

8. 


    

