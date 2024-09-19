// Importing the Express module
import express, { Request, Response } from 'express';

// Create an instance of Express
const app = express();

// Define the port to run the server
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// A basic route for the root URL '/'
app.get('/', (req: Request, res: Response) => {
  // Sending a simple "Hello World" response
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message when the server starts
  console.log(`Server is running on http://localhost:${PORT}`);
});

