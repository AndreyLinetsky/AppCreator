let router = require('express').Router();
let appCreatorController = require('../controllers/appCreator');

router.route('/uploadImage').post(appCreatorController.uploadImage);

module.exports = router;
