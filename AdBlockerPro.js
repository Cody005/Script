/******************************

Application : Quantumultx
Author：MGMdev
ReleaseDate：2023-11-02

*******************************

[rewrite_local]
https://cdn-api.scruffapp.com/app/store/boost?device_id=e9bcf5775594eb2b8390c63eb73a75d2&hardware_id=9483a7bd73066a4a68c1f3855bf67e80&client_semver=7.12.0&flavor=1&client_version=7.1200&device_type=1 url script-response-body url script-response https://raw.githubusercontent.com/Cody005/Script/main/AdBlockerPro.js
******************************/
[mitm]
hostname = cdn-api.scruffapp.com

var objc = JSON.parse($response.body);

objc = {
  "results": {
    "available_count": 1,
    "stats_available": true,
    "boost_state": active,
    "eligible_if_online": true
  }
}

$done({ body: JSON.stringify(objc) });