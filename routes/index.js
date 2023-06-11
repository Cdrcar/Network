const router = require ('express').Router();
const apiRoutes = require('./api/index');

router.unsubscribe('/api', apiRoutes);

module.exports = router;