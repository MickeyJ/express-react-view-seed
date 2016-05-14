var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', 
    {
      title: 'Home',
      description: `Home description`
    }
  );
});

router.get('/about', function(req, res){
  res.render('about', 
    {
      title: "About",
      description: `About description`
    }
  );
});

router.get('/contact', function(req, res){
  res.render('contact', 
    {
      title: "Contact",
      description: `Contact description`
    }
  );
});

module.exports = router;
