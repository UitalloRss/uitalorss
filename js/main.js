  {/* Initialize Firebase */}
  var config = {
    apiKey: "AIzaSyBPCgYWxDFHqT3rT_bN-rFP7VUCsvm070E",
    authDomain: "meu-portifolio-1ace8.firebaseapp.com",
    databaseURL: "https://meu-portifolio-1ace8.firebaseio.com",
    projectId: "meu-portifolio-1ace8",
    storageBucket: "meu-portifolio-1ace8.appspot.com",
    messagingSenderId: "425640266943"
  };
  firebase.initializeApp(config);

var emailRef = firebase.database().ref('emails')

document.getElementById('emailforms').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    var email = document.getElementById('useremail').value;

    saveEmail(email)
}

function saveEmail(email){
    var newemailRef = emailRef.push();

    newemailRef.set({
        email: email
    });
}