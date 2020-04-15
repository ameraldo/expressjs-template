const router = require('express').Router();

const helloWorld = require('../core/helloWorld');


router.get('/', helloWorld);


module.exports = router;
