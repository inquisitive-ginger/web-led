var express = require('express');
var router = express.Router();
var RGBLed = require('../controllers/rgb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/led', function(req, res, next) {
  RGBLed.setColor(req.body.redValue, req.body.greenValue, req.body.blueValue)
})

module.exports = router;
