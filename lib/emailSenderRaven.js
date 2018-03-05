// You can have the same functionality executing this command
/**
curl -k -XPOST -H 'Content-Type:application/json' -d '{"to":"cjc@tokbox.com", "template_id":"customer_usage", "inject" : \
{"name": "PSE", "device_current": "672M", "device_last": "665M", "device_change": 13, "subscribed_current": "672M", \
"subscribed_last": "665M", "subscribed_change": 12, "account_portal_link" : "https://tokbox.com/account", \
"recommended_browser": [["Chrome", "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Laptop-Signal-64.png", "57.9"],\
["Firefox", "https://cdn1.iconfinder.com/data/icons/line-christmas-icons/75/_star-64.png", "49.0"],\
["Safari", "https://cdn0.iconfinder.com/data/icons/logos-brands/24/logo_brand_brands_logos_apple_ios-64.png", "beta"]], \
"expired_token": [["A", "15"], ["B", "0"]],"outdated_browser": [["Chrome", "52", "51"], ["Firefox", "1", "2", "3"]],\
 "unsupported_sdk_client": [["JS", "2.4", "2.5"], ["Android", "1"], ["iOS", "1", "2", "3"]],\
 "unsupported_sdk_server": [["Python", "1"]],"learn_how_link": "https://www.tokbox.com", \
 "updates":[["To see our updated release schedule, visit", "https://www.tokbox.com", "tokbox.com"],\
 ["To read about a new feature, visit",  "https://www.tokbox.com", "tokbox.com"],\
 ["BETA programs, Session Monitoring: Many customers want to create their own Inspector tool to understand programmatically session quality.",\
  "https://www.tokbox.com", "Join this"]]}}' http://localhost:9911/v1/certified
*/

module.exports = function() {
  'use strict';
  var http = require('http');
  var C = require('./ravenConfig');

  var templateDataCustomerSuccessCharts = {
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

  var templateDataCustomerSuccess = {
    "last_month": "last_month",
    "previous_month": "previous_month",
    "device_previous": "000M",
    "subscribed_previous": "672M",
    "insights": [
      { rate: 11.11, delta: "a" },
      { rate: 22.22, delta: "b" },
      { rate: 33.33, delta: "c" }
    ],
    "name": "",//PSE",
    "device_current": "672M",
    "device_last": "665M",
    "device_change": 13,
    "subscribed_current": "672M",
    "subscribed_last": "665M",
    "subscribed_change": 12,
    "account_portal_link": "https://tokbox.com/account",
    "recommended_browser": [
      { name: "Chrome", versions: ["57.9"], icon: "https://assets.tokbox.com/email/icon_chrome@2x.png" },
      { name: "Firefox", versions: ["49.0"], icon: "https://assets.tokbox.com/email/icon_firefox@2x.png" }
 //     { name: "Safari", versions: ["beta"], icon: "https://cdn0.iconfinder.com/data/icons/logos-brands/24/logo_brand_brands_logos_apple_ios-64.png" }
    ],
    "expired_token": [
      { name: "tokenName", expiredTokens: 23 },
      { name: "B", expiredTokens: 2 }
    ],
    "outdated_browser": [
      { name: "Chrome", versions: ["52", "51"], icon: "" },
      { name: "Firefox", versions: ["1", "2", "3", "4"], icon: "" },
      { name: "outdatedBrowserName", versions: ["v1", "v2"], icon: "" }
    ],
    "unsupported_sdk_client": [
      { name: "JS", versions: ["2.4", "2.5"] },
      { name: "Android", versions: ["1"] },
      { name: "iOS", versions: ["1", "2", "3"] }
    ],
    "unsupported_sdk_server": [
      { name: "Python", versions: ["v2"] },
      { name: "ruby", versions: ["unsup"] }
    ],
    "learn_how_link": "https://www.tokbox.com",
    "updates": [
      { text: "To see our updated release schedule, visit", link: "aaahttps://www.tokbox.com", linkText: "" },
      { text: "To read about a new feature, visit", link:"https://www.tokbox.com", linkText: "www.tokbox.com" },
      { text: "BETA programs, Session Monitoring: Many customers want to create their own Inspector tool to understand programmatically session quality.",
       link: "https://www.tokbox.com", linkText: "Join this"}
    ],
    "releases_updates": [
      "To get notified for every release, subscribe to our <a href=\"https://support.tokbox.com/hc/en-us/sections/201722216-New-Releases\">New Releases page</a>.",
      "JS Client SDK Updates:<ul><li><a href=\"https://tokbox.com/developer/sdks/js/release-notes.html#fixedIssues\">2.11.6</a> is now available on Standard line.</li><li>2.11.5 will be moved to the Enterprise line on July 20th.</li><li>2.11.6 will be deployed to the Enterprise line the week of August 17th.</li></ul>",
      "V2.8 SDKs will be deprecated September 22nd.",
      "<a href=\"https://tokbox.com/developer/beta/\">BETA Programs</a>: <a href=\"https://tokbox.com/developer/guides/session-monitoring/\">Session Monitoring</a>: Many customers want to create their own Inspector tool to understand programmatically session quality. This is the first step in making quality data available to you. Sign up to start exploring this useful data now."
    ],
    "product_updates": [
      "Add WebRTC to your app immediately using our production-ready <a href=\"https://tokbox.com/developer/embeds/\">Embeds</a> feature.",
      "Finally! Now that Apple’s supporting WebRTC in Safari, you can create a new project in our <a href=\"https://tokbox.com/account/#/\">Account Portal</a> to jump start your Safari app development."
    ],
    "company_updates": [
      "Our new VP of Customer Success, Paul Reeves, is meeting with Enterprise customers. If you haven’t spoken to him yet, <a href=\"http://calendly.com/paulr-tokbox\">grab a 15 o 30 minute slot on his calendar</a>."
    ]
  };

  var toAll = [
      "lauren@tokbox.com",
      "ibai@tokbox.com",
      "taha@tokbox.com",
      "alexis@tokbox.com",
      "paulr@tokbox.com",
      "amac@tokbox.com",
      "crdlc@tokbox.com",
      "cjc@tokbox.com"
  ];

  var toMe = ["cjc@tokbox.com"];

  var toMeCris = [
      "crdlc@tokbox.com",
      "cjc@tokbox.com"
  ];

  var toMeAmac = [
      "amac@tokbox.com",
      "cjc@tokbox.com"
  ];

  var toTeam = [
      "amac@tokbox.com",
      "crdlc@tokbox.com",
      "cjc@tokbox.com"
  ];

  var dataToSend = {
    templateId: "customer_usage",
//    templateId: "customer_usage_charts",
    templateData: templateDataCustomerSuccess,
//    templateData: templateDataCustomerSuccessCharts,
    to: toMe
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