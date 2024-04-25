import express from 'express';
import payload from 'payload';

const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
app.use(cors());

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

app.get('/fetch-media', async (req, res) => {
  const result = await payload.find({
    collection: 'media',
  });

  const media = await result.docs;

  const media_card = media.map((item) => ({
    id: item.id,
    alt: item.alt,
    filename: item.filename,
    cardImageUrl: item.sizes.card.url, // URL of the card-sized image
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));

  res.json(media_card);
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
