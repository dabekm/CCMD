//this code was copied from the callback example on https://www.npmjs.com/package/github-jobs
//this script does not do anything yet, but will be part of querying the github-jobs API for JSON results
/*var jobs = require('github-jobs');

jobs.find({
    term: 'Node.js'
}, function (err, results) {
    if (err) {
        return console.log('Error: ', err);
    }

    console.log('Found ' + results.length + ' jobs.');

    results.forEach(function (job) {
        jobs.findById(job.id, function (err, result) {
            if (err) {
                return console.log('Error: ', err);
            }
            console.log('Job : ', result);
        });
    });
}); */
var jobList = [];

var jobs = require('github-jobs');

function getNotes() {
    jobs.find({
        term : 'Node.js'
    }, function(err, results){
        if(err){
            return console.log('Error: ', err);
        }

        //console.log('Found ' + results.length + ' jobs.');

        var i = 0;
        var z = results.length;

        results.forEach(function(job){
            jobs.findById(job.id, function(err, result){
                if(err){
                    return console.log('Error: ', err);
                }
                // console.log('Job : ', result);
                jobList.push(result);
                i++;
                if (i===z) {
                    getJob();
                }
            });
        });
    });
}

$(document).ready(getNotes);

function buildNote(data1,data2,data3) {
    //create each note's <p>
    var p = $("<p class='flex-item'>");
    //add note text
    p.html("<h4>" + data1 + "</h4>" + data2 + "\n" + "<a href =\"" + data3 + "\">Link</a>");
    //append to DOM
    $(".job-output").append(p);
    console.log(data1);
}

function getJob() {
    for (var k = 0; k<3; k++) {
        console.log(jobList[k].title);
        buildNote(jobList[k].title,jobList[k].company,jobList[k].url);
    }
}

//getNotes();