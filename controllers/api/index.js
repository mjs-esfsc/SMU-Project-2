const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const shoppingCartRoutes = require('./shoppingCartRoutes');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/cart', shoppingCartRoutes);
<<<<<<< HEAD
=======

>>>>>>> main

module.exports = router;

// apiKey: AIzaSyDr8fjBfhX19qdQq2p4-7aw7d0sGL2BI5s