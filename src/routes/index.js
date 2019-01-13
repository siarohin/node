const express = require('express');
const router = express.Router();
const apiRouter = require('../routes/api');
const authRouter = require('../routes/auth');

router.use('/api', apiRouter);
router.use('/auth', authRouter);


module.exports = router;