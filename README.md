
# Quora Posts

This is a simple posting app built with Express.js. Users can create, read, update, and delete posts.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd /posting app
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    node index.js
    ```
2. Open your browser and go to `http://localhost:8080/posts` to view the posts.

## Endpoints

- `GET /posts` - View all posts
- `GET /posts/new` - Form to create a new post
- `POST /posts` - Create a new post
- `GET /posts/:id` - View a specific post
- `GET /posts/:id/edit` - Form to edit a post
- `PATCH /posts/:id` - Update a post
- `DELETE /posts/:id` - Delete a post

## Dependencies

- express
- ejs
- method-override
- uuid
