# Sellcraft

This repository contains the client and server code for the Sellcraft application.

## Running Locally

To run this project locally, follow these steps:

### 1. Prerequisites

Make sure you have Node.js and npm installed on your system.

### 2. Backend Setup

1.  Navigate to the `server` directory:
    ```bash
    cd server
    ```
2.  Install the server dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `server` directory and add your PostgreSQL connection string. This project uses Supabase for the database.
    ```
    POSTGRES_URL="your_supabase_postgresql_connection_string"
    ```
    Replace `your_supabase_postgresql_connection_string` with your actual connection string.
4.  Start the backend server:
    ```bash
    node index.js
    ```
    The server will typically run on `http://localhost:3000` (or another port if configured).

### 3. Frontend Setup

1.  Navigate to the `client` directory:
    ```bash
    cd client
    ```
2.  Install the client dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    This will usually open the application in your browser at `http://localhost:5173`

### 4. Vercel Deployment

The `vercel.json` file in the root directory is used for deploying the project to Vercel. It configures the serverless function for the backend. This file is not directly used for local development.
