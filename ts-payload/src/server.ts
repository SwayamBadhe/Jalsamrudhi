import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import payload from 'payload';
import bodyParser from 'body-parser';

const mediaRouter = require('./routes/media');
const donateRouter = require('./routes/payment');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/fetch-media', mediaRouter);
app.use('/order', donateRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

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
