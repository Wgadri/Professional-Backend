# Professional Backend

A Node.js + Express backend for task and authentication management.

## Features
- User registration and login
- JWT-based authentication
- Task creation, listing, and deletion
- MongoDB integration with Mongoose
- Express middleware for CORS, Helmet, and request logging

## Prerequisites
- Node.js 18+
- MongoDB running locally or a reachable MongoDB URI

## Installation

```bash
npm install
```

## Environment Variables
Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/professional-backend
JWT_SECRET=your_secure_jwt_secret
```

## Run the app

```bash
npm start
```

For development:

```bash
npm run dev
```

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Tasks
- `POST /api/tasks`
- `GET /api/tasks`
- `DELETE /api/tasks/:id`

## Notes
- The application automatically falls back to the next free port if 5000 is already in use.
- If MongoDB is not running, the app will fail to connect until the database is available.
