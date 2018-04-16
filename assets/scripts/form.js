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

    var firebaseRef = firebase.database().ref();

    var authSave = email.value;

    var passSave = password.value;

    var firstName = first.value;

    var lastName = last.value;

    firebaseRef.push().set(authSave);

    firebaseRef.push().set(passSave);

    firebaseRef.push().set(lastName);

    firebaseRef.push().set(firstName);

    window.alert("Working");

}