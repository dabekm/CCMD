function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//overall app logic and loader...
function opportunity() {
    "use strict";
    //manage input field and new opportunity output
    function createOpp() {
      //object for wrapper html for note
      var $opp = $("<p>");
      //define input field
      var $opp_text = $(".userIn input"); 
      //conditional check for input field
      if ($opp_text.val() !== "") {
      //set content for opportunity
      $opp.html($opp_text.val());
      //append opp text to Saved Job Opportunities
      $(".saved").append($opp);
      $opp_text.val("");
      }
    }
  
    //handle user event for `add` button click
    $(".userIn button").on("click", function(e) {
      createOpp();
    });
  
    //handle user event for keyboard press
    $(".userIn input").on("keypress", function(e){
      if (e.keyCode === 13) {
        createOpp();
      }
    });
  
  };

$(document).ready(opportunity);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    function profilePage(){

      window.location.href = "profile.html";

    };

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.
  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
