'use strict';

var EmailSender = require('./lib/emailSenderRaven');

var emailSender = new EmailSender();
console.log('INDEX');
emailSender.test();
console.log('index. END');
