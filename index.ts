import express, { Express, Request, Response } from "express";
import sequelize from './models/database';
import bookRoutes from './controllers/book_controller';
import bodyParser from 'body-parser';
import authMiddleware from './middleware/authMiddleware'; // Import the auth middleware
import seedBooks from "./models/seed_book";

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app: Express = express()
const port = process.env.PORT;

app.use(cors());



// Middleware
app.use(bodyParser.json());

// Use the authentication middleware for all routes
// const expectedToken = "book-management-static-token"; // Define your static token
// app.use(authMiddleware(expectedToken));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World! Ria')
})

app.use(express.json());
app.use('/api', bookRoutes);

// Function to run migrations
const runMigrations = async () => {
  try {
    // Sync models (including migrations)
    await sequelize.sync();
    await seedBooks();

    console.log('Database migrated successfully!');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1); // Exit if migration fails
  }
};

const startServer = async () => {
  await runMigrations(); // Wait for migrations to complete
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
// if (require.main === module) {
//   startServer(); // Start the server if this file is run directly
// }
startServer(); // Start the server and run migrations

export default app; // Export the app for testing