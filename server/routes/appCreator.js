let router = require('express').Router();
let appCreatorController = require('../controllers/appCreator') 

 router.route('/companyLogo').post(appCreatorController.uploadCompanyLogo)

 module.exports = router