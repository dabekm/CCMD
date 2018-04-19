//this code was copied from the callback example on https://www.npmjs.com/package/github-jobs
//this script does not do anything yet, but will be part of querying the github-jobs API for JSON results
var jobs = require('github-jobs');

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
});
