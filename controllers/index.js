const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', home-routes);
router.use('/api', apiRoutes);

module.exports = router;
