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

var login = document.getElementById("login");

var pass= document.getElementById("pass");

function signon() { 
  
  var loginCheck = login.value;
  var passCheck = pass.value;


  firebase.auth().signInWithEmailAndPassword(loginCheck, passCheck).catch(function(error) {
    console.log(error.code);
    console.log(error.message);
  });

  window.alert("Button Working");


}

function signout(){

  firebase.auth().signOut().then(function() {

    console.log("Logged out!")
 }, function(error) {
    console.log(error.code);
    console.log(error.message);
 });

 widow.alert("Logged off!");
}