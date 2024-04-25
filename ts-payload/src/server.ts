import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import payload from 'payload';

const mediaRouter = require('./routes/media');

dotenv.config();

const app = express();

// Middleware
app.use(cors());

// Routes
app.use('/fetch-media', mediaRouter);

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(5500);
};

start();
