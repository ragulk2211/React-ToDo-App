# Todo App as a Single Page Application

A full-stack MERN Todo application with user authentication, tagging, search, and pagination.

The SPA has 5 pages (routes):

- A Homepage to Signup or Signin to the application
- Register page for users to register to be able to use the app
- Login page for users to authenticate and access private pages
- A Dashboard page which shows authenticated/registered user todos and actions
- Notfound page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Getting Started

1. Clone the repo and install dependencies in the root and client folders:

| Steps   | Command                                    |
| ------- | ------------------------------------------- |
| Install (root)   | `npm install`                       |
| Install (client) | `cd client && npm install && cd ..` |
| Run     | `npm run dev`                                |

2. Create a `config/default.json` file (not included in the repo for security) with your own MongoDB connection string:

```json
{
  "mongoURI": "your-mongodb-connection-string",
  "jwtSecret": "your-jwt-secret"
}
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Directory Layout and Tree