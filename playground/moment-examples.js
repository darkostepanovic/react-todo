var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1504520095;

var currentMoment = moment.unix(timestamp);
console.log('currentMoment', currentMoment.format("MMM D, YY @ h:mm a"));

// January 3rd, 2016 @ 12:13 AM
console.log('currentMoment', currentMoment.format("MMMM Do, YYYY @ hh:mm A"));
