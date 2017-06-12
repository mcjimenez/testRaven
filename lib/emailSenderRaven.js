module.exports = function() {
  'use strict';
  var http = require('http');
  var C = require('./ravenConfig');

  var templateData = {
    "subscribed_data_last": [10, 30, 20, 40, 30],
    "subscribed_data_current": [50, 10, 70, 60, 50],
    "devices_label": ["Android", "iOS", "Web"],
    "devices_data": [11, 22, 33],
    "os_label": ["Mac", "Windows", "Linux"],
    "os_data": [44, 55, 66],
    "browser_label": ["Chrome", "Firefox", "Others"],
    "browser_data" : [77, 88, 99]
  };

  var dataToSend = {
    templateId: "customer_usage",
    templateData: templateData,
    to: [
      "cjc@tokbox.com",
      "crdlc@tokbox.com",
      "amac@tokbox.com",
      "paulr@tokbox.com",
      "mike@tokbox.com"
    ]
  };

  function getData(email, templateId, templateData) {
    return {
      "to": email,
      "template_id": templateId,
      "inject": templateData
    }
  }

  function getHeaders(bodyByteLength) {
    return {
      hostname: C.RAVEN_HOSTNAME,
      port: C.RAVEN_PORT,
      path: C.RAVEN_PATH,
      method: C.RAVEN_METHOD,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": bodyByteLength
      }
    };
  }

 function send(data, body) {
    var request = new http.ClientRequest(data);
    request.on('response', function(response) {
      console.log('STATUS:', response.statusCode);
      console.log('HEADERS:', JSON.stringify(response.headers));
      response.setEncoding('utf8');
      response.on('data', function(chunk) {
        console.log('BODY:', chunk);
      });
    });
    request.end(body);
  }

  function testSend() {
    var emails = dataToSend.to;
    for (var i = 0, l = emails.length; i < l; i++) {
      var body = JSON.stringify(getData(emails[i], dataToSend.templateId, dataToSend.templateData));
      var options = getHeaders(Buffer.byteLength(body));
      send(options, body);
    }
  }

  return {
    test:testSend
  };

};