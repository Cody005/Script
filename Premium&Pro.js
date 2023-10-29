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
^https?:\/\/pxxxqh-launches\.appsflyersdk\.com\/? script-response-body https://raw.githubusercontent.com/Cody005/Script/main/Premium%26Pro.js?token=GHSAT0AAAAAACJRWXSC4ZARZM5WZHHTGN2OZJ6ZXGA

******************************************/
const body = $response.body
    .replace(/isPremium":\d/g, 'isPremium":1')
    .replace(/premium":"\d"/g, 'premium":"1"')
    .replace(/expireDate":\d/g, 'expireDate":4082853940000');
$done({ body });
