/******************************

Application : Quantumultx
Author：MGMdev
ReleaseDate：2023-11-02

*******************************

[rewrite_local]
https://buy.itunes.apple.com/verifyReceipt url script-response-body https://raw.githubusercontent.com/Cody005/Script/main/AdBlockerPro.js

[mitm]
hostname = buy.itunes.apple.com
*******************************/



var mgmdev = JSON.parse($response.body);

mgmdev.data.isPremium = true;
mgmdev.data.timeExpire = 4092599349;

$done({body : JSON.stringify(mgmdev)});

