const express = require('express');
const router = express.Router();

const { getAllMedia, getMediaById } = require('../controllers/media');

router.route('/').get(getAllMedia);
router.route('/:id').get(getMediaById);

module.exports = router;
