module.exports = function() {
  'use strict';
  var http = require('http');
  var C = require('./ravenConfig');

  var templateData = {
    "subscribed_data_last": [80, 30, 20, 40, 30],
    "subscribed_data_current": [30, 10, 70, 60, 50],
    "devices_label": ["Android", "iOS", "Web"],
    "devices_data": [70, 20, 10],
    "os_label": ["Mac", "Windows", "Linux"],
    "os_data": [44, 55, 66],
    "browser_label": ["Chrome", "Firefox", "Others"],
    "browser_data" : [90, 9, 1],
    "countries" : [
      [
       "USA",
       "https://cdn2.iconfinder.com/data/icons/flags_gosquared/48/United-States_flat.png",
       "75"
      ], [
        "India",
        "https://cdn2.iconfinder.com/data/icons/flags_gosquared/48/India_flat.png",
        "25"
        ]
      ],
    "subscribed_minutes": 672,
    "unique_ips": 149,
    "top_browser_os": "iOS",
    "top_browser_os_img": "https://cdn0.iconfinder.com/data/icons/logos-brands/24/logo_brand_brands_logos_apple_ios-64.png",
    "use_archiving": "https://www.tokbox.com",
    "use_embeds": "https://www.tokbox.com",
    "active_projects": 4,
    "sip_minutes": "143M",
    "archived_minutes": "25M",
    "archived_minutes_ind": "143M",
    "archived_minutes_comp": "143M",
    "broadcast_minutes": "130K",
    "broadcast_minutes_ind": "10K",
    "broadcast_minutes_comp": "120K",
    "screen_sharing_minutes": "143M",
    "one_more": [1,2,3],
    "second_more": "otro mas"
  };

  var templateDataV2 = {
    "name": "PSE",
    "device_current": "672M",
    "device_last": "665M",
    "device_change": 13,
    "subscribed_current": 672,
    "subscribed_last": 665,
    "subscribed_change": 12,
    "account_portal_link": "https://tokbox.com/account"
  };

  var dataToSend = {
    templateId: "customer_usage_v2",
    templateData: templateDataV2,
    to: [
      "cjc@tokbox.com"
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