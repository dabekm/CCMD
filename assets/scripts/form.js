// Get the modal
var modal = document.getElementById('id01');
    
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var email = document.getElementById("email");

var password = document.getElementById("password");

function submitClick() {

    var firebaseRef = firebase.database().ref("users");

    var authSave = email.value;

    var passSave = password.value;

    var firstName = first.value;

    var lastName = last.value;

    firebaseRef.push().set({
        email: authSave,
        pass: passSave,
        first_name: firstName,
        last_name:lastName
    })

    firebase.auth().createUserWithEmailAndPassword(authSave, passSave).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
    window.alert("Working:Database");
};

//fixed that weird thing with the enter button

document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        submitClick();
    }
}
