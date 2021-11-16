const router = require('express').Router();

const apiRoutes = require('./api/userRoutes');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
