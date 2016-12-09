var express = require('express');
var router = express.Router();
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyA6cmiCj6Chw6Vg9t12a966Rs0LOeD5Zx4",
    authDomain: "my-library-application-a600d.firebaseapp.com",
    databaseURL: "https://my-library-application-a600d.firebaseio.com",
    storageBucket: "my-library-application-a600d.appspot.com",
    messagingSenderId: "617207975882"
  };
  firebase.initializeApp(config);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' ' });
});

router.get('/login', function(req, res, next){
  res.render('login',{title:'login'})
});
router.get('/signup', function(req, res, next){
  res.render('signup',{title:'signup'})
});

router.get('/book', function(req, res, next){
  res.render('book',{title:'book'})
});

router.post('/signup', function(req, res, next){
  console.log(req.body.email)
   var email = req.body.email;
   var password = req.body.password;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((err) => {
     console.log(err.message);
   })
   .then(function(snapshot){
     res.redirect('/login')
   })
})
router.post('/login',function(req, res, next){
  console.log(req.body.password)
  var email = req.body.email;
  var password = req.body.password;
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
})
.then(function(snapshot){
  res.redirect('/book')
})
})
module.exports = router;

