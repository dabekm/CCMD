//load main app logic - v3
function loadApp() {
    "use strict";

    function buildNote(data1,data2,data3) {
        //create each note's <p>
        var p = $("<p class='flex-item'>");
        //add note text
        p.html("<h4>" + data1 + "</h4>Company: " + data2 + "\n" + "<a href =\"" + data3 + "\">Link</a>");
        //append to DOM
        $(".job-output").append(p);
    }

    //get the notes JSON
    function getNotes() {
        //.get returns an object derived from a Deferred object - do not need explicit deferred object
        var $deferredNotesRequest = $.getJSON (
            "./assets/docs/json/jobs.json",
            {format: "json"}
        );
        return $deferredNotesRequest;
    }

    //test with .then()
    getNotes().then(function(response1) {
        //output test to DOM
        for (var i = 0; i<6; i++) {
            buildNote(response1.jobTitle[i].title,response1.jobTitle[i].company,response1.jobTitle[i].url);
        }
        return getNotes();
    });


};
$(document).ready(loadApp);