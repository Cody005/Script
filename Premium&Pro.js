/******************************************
 * @name Multi-Apps
 * @desc Unlock membership
 * @author mgmdev
 * @create 20231029
 * @version 1.0.0
******************************************

[mitm]
hostname = pxxxqh-launches.appsflyersdk.com

[rewrite_local]
^https?:\/\/pxxxqh-launches\.appsflyersdk\.com\/?  script-response-body https://raw.githubusercontent.com/Cody005/Script/main/Premium%26Pro.js

******************************************/
const body = $response.body
    .replace(/isVip":\d/g, 'isVip":1')
    .replace(/vip":"\d"/g, 'vip":"1"')
    .replace(/expireDate":\d/g, 'expireDate":4082853940000');
$done({ body });
