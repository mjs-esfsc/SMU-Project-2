const router = require('express').Router();
<<<<<<< HEAD
=======

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
>>>>>>> afbfa2b849a73168c497b57c2bc31827ef132f07
