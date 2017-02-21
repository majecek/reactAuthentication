var express = require('express');
var app     = express();
var port    =   process.env.PORT || 9000;

// ROUTES
// ==============================================

// we'll create our routes here

// get an instance of router
var router = express.Router();

router.use(function (req,res,next)  {
  console.log(req.method, req.url);
  next();
});

router.param('name1', function (req, res, next, name1) {
  console.log('doing name validations on ' + name1);
  req.name = name1;
  next();
})

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
  res.send('im the home page!');
});



router.get('/hello/:name1', function (req, res) {
  res.send(`Hello ${req.name} !`);
})

router.get('/about', function(req, res) {
  res.send('im the about page!');
});

app.use('/api', router);

app.route('/login')
  .get(function (req, res) {
    res.send('this is the login form');
  })
  .post(function (req, res) {
    console.log('processing');
    res.send('processing the login form!');
  });

// sample route with a route the way we're used to seeing it
// app.get('/sample', function(req, res) {
//   res.send('this is a sample!');
// });

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);