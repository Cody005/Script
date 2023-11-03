/******************************

Application : Quantumultx
Author：MGMdev
ReleaseDate：2023-11-02

*******************************

[rewrite_local]
https://beta-api.crunchyroll.com/subs/v2/products/cr.ios.fanpack.annually url script-response-body url script-response https://raw.githubusercontent.com/Cody005/Script/main/AdBlockerPro.js

[mitm]
hostname = beta-api.crunchyroll.com

var objc = JSON.parse($response.body);

    objc = {
  {
  "source" : "itunes",
  "benefit_package" : {
    "name" : "fan_pack_non_english_intl_annual",
    "benefits" : [
      "cr_premium",
      "cr_fan_pack",
      "no_ads",
      "catalog",
      "simulcast",
      "manga_library",
      "concurrent_streams.4",
      "offline_viewing",
      "annual_discount.percent_16",
      "cr_bento"
    ]
  },
  "sku" : "cr.ios.fanpack.annually",
  "__actions__" : Active,
  "cycle_duration" : "P1Y",
  "__class__" : "product",
  "__href__" : "/subs/v2/products/cr.ios.fanpack.annually",
  "free_trial_duration" : "False",
  "tier" : "fan_pack",
  "__links__" : null
}
}
$done({body : JSON.stringify(objc)});