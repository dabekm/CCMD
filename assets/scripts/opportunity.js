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
document.getElementById("About").style.display = "none";

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



function login(){

  console.log("user is signed in");

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

  var user = firebase.auth().currentUser;

  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      
      console.log("user is signed in");
  
      if(user != null){
  
        var email_id = user.email;
        window.alert("Log in successful");

        window.location.href = "profile.html";
  
      }
  
    } else {
      console.log("else");
    }
  })
}

function logOut(){

  firebase.auth().signOut();
  console.log("Logged Out");

  if(user = null){

    window.location.href = "index.html";

  }

}
