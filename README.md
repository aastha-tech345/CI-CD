# MERN Project Setup

This is a simple MERN (MongoDB, Express, React, Node.js) project. Follow the steps below to get it running on your local machine.

## Prerequisites

- Node.js (v12 or later)
- MongoDB running locally or remotely
- npm or yarn (for managing packages)

## 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-project.git

To start frontend > >
cd Portfolio
npm install
npm start

To start backend > >
cd Server
touch .env
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/your_database_name

# Express Configuration
PORT=5000

# JWT Secret Key for Authentication
JWT_SECRET=your_secret_key_here

# React App Configuration
REACT_APP_API_URL=http://localhost:5000

# Set Node environment (can be 'development' or 'production')
NODE_ENV=development

npm install
node index.js or npm start

4. Running the Project

Start the Backend (Node.js and Express)
Once the dependencies are installed and your .env file is configured, you can start the server by running:
npm run server

This will start the Express backend on the port specified in your .env file (default: 5000).

Start the Frontend (React)
To run the React frontend, use the following command in a separate terminal window:
npm run client

The React frontend will be available at http://localhost:3000, and it will communicate with the backend API at the REACT_APP_API_URL specified in your .env.

5. Accessing the Application
Once both the backend and frontend are running, you can access the application in your web browser at:

Frontend: http://localhost:3000
Backend API: http://localhost:5000

6. Common Commands
Start the backend server: npm run server
Start the frontend client: npm run client
Start both backend and frontend concurrently: npm run dev

7. Troubleshooting
Make sure MongoDB is running locally or you have a remote MongoDB URL in your .env file.
Check your .env file for any missing or incorrect values.

### Explanation:
- **Create `.env` file**: Instructions on how to create the `.env` file and which environment variables need to be added for the project to function correctly.
- **Environment Variables**: An example of the key environment variables (`MONGO_URI`, `PORT`, `JWT_SECRET`, `REACT_APP_API_URL`, `NODE_ENV`) with placeholders that should be customized for your project.
- **Instructions for Running the Project**: Includes steps for starting the backend, frontend, and running both concurrently.

This structure will help other developers (and yourself) set up the project easily by providing all necessary details for environment configuration and running the project.


