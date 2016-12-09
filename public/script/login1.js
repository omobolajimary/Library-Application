// Get a reference to the database service
var database = firebase.database();
//Signup Authentication
function createUserWithEmailAndPassword(email, password){
var email=document.getElementByid("email");
var password= document.getElementByid("password");
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}
//Signin Authentication
function signInWithEmailAndPassword(email,password){
var email=document.getElementByid("email");
var password= document.getElementByid("password");
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}
//Signout
function signout(){
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
}
// Send Verification Email
function sendEmailVerification(){
var user = firebase.auth().currentUser;
user.sendEmailVerification().then(function() {
  // Email sent.
}, function(error) {
  // An error happened.
});
}
function provideData(uid, displayName,email){
var user = firebase.auth().currentUser;
//To get the User's Profile Information
if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: "+profile.providerId);
    console.log("  Provider-specific UID: "+profile.uid);
    console.log("  Name: "+profile.displayName);
    console.log("  Email: "+profile.email);
  });
}
}