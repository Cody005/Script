/******************************

Application : Quantumultx
Author：MGMdev
ReleaseDate：2023-11-02

*******************************

[rewrite_local]
https://api.mixpanel.com/track/?ip=1 url script-response-body url script-response https://raw.githubusercontent.com/Cody005/Script/main/AdBlockerPro.js

[mitm]
hostname = api.mixpanel.com
*********************************/
var objc = JSON.parse($response.body);

objc = {
  [
  {
    "properties" : {
      "mp_lib" : "swift",
      "time" : 1699292303400,
      "$screen_width" : 390,
      "boost_active" : false,
      "$model" : "iPhone14,2",
      "$app_build_number" : "22269",
      "$device_id" : "E141B342-4FF1-4F5D-9A28-7DDB7F62DE1A",
      "$carrier" : "",
      "distinct_id" : "178467943",
      "$wifi" : true,
      "hardware_id" : "9483a7bd73066a4a68c1f3855bf67e80",
      "$user_id" : "178467943",
      "token" : "1034e0665ab7f8e072536319e6caf8e1",
      "pro_status" : "pro",
      "$screen_height" : 844,
      "profile_type" : "profile",
      "$radio" : "LTE",
      "$lib_version" : "3.5.1",
      "$manufacturer" : "Apple",
      "$app_version_string" : "7.12.0",
      "$had_persisted_distinct_id" : true,
      "$os_version" : "15.3.1",
      "flavor" : "scruff",
      "$os" : "iOS"
    },
    "id" : 5406,
    "$mp_metadata" : {
      "$mp_event_id" : "bca65ea1fe5b8360",
      "$mp_session_start_sec" : 0,
      "$mp_session_seq_id" : 0,
      "$mp_session_id" : "326fb8859f88fe05"
    },
    "event" : "ftue: success_register_remote_notifications"
  },
  {
    "$mp_metadata" : {
      "$mp_event_id" : "4e783d68f5e5918d",
      "$mp_session_start_sec" : 0,
      "$mp_session_seq_id" : 1,
      "$mp_session_id" : "326fb8859f88fe05"
    },
    "properties" : {
      "source" : "account",
      "time" : 1699292306311,
      "$screen_width" : 390,
      "mp_lib" : "swift",
      "boost_active" : true,
      "$model" : "iPhone14,2",
      "$app_build_number" : "22269",
      "$device_id" : "E141B342-4FF1-4F5D-9A28-7DDB7F62DE1A",
      "$carrier" : "",
      "distinct_id" : "178467943",
      "$wifi" : true,
      "hardware_id" : "9483a7bd73066a4a68c1f3855bf67e80",
      "$user_id" : "178467943",
      "pro_status" : "pro",
      "token" : "1034e0665ab7f8e072536319e6caf8e1",
      "$screen_height" : 844,
      "profile_type" : "profile",
      "$radio" : "LTE",
      "$lib_version" : "3.5.1",
      "$manufacturer" : "Apple",
      "$os_version" : "15.3.1",
      "$had_persisted_distinct_id" : true,
      "$app_version_string" : "7.12.0",
      "flavor" : "scruff",
      "$os" : "iOS"
    },
    "id" : 5407,
    "event" : "account: viewed"
  },
  {
    "$mp_metadata" : {
      "$mp_event_id" : "efeb9532c2bd98be",
      "$mp_session_start_sec" : 0,
      "$mp_session_seq_id" : 2,
      "$mp_session_id" : "326fb8859f88fe05"
    },
    "id" : 5408,
    "properties" : {
      "source" : "account",
      "time" : 1699292310983,
      "mp_lib" : "swift",
      "$screen_width" : 390,
      "boost_active" : true,
      "$model" : "iPhone14,2",
      "$app_build_number" : "22269",
      "$device_id" : "E141B342-4FF1-4F5D-9A28-7DDB7F62DE1A",
      "$carrier" : "",
      "distinct_id" : "178467943",
      "$wifi" : true,
      "hardware_id" : "9483a7bd73066a4a68c1f3855bf67e80",
      "$user_id" : "178467943",
      "pro_status" : "pro",
      "token" : "1034e0665ab7f8e072536319e6caf8e1",
      "$screen_height" : 844,
      "profile_type" : "profile",
      "$radio" : "LTE",
      "$lib_version" : "3.5.1",
      "$manufacturer" : "Apple",
      "$app_version_string" : "7.12.0",
      "$os_version" : "15.3.1",
      "$had_persisted_distinct_id" : true,
      "flavor" : "scruff",
      "$os" : "iOS"
    },
    "event" : "boost: purchase_viewed"
  },
  {
    "$mp_metadata" : {
      "$mp_event_id" : "d7325be2ac66eeab",
      "$mp_session_start_sec" : 0,
      "$mp_session_seq_id" : 3,
      "$mp_session_id" : "326fb8859f88fe05"
    },
    "properties" : {
      "flavor" : "scruff",
      "$lib_version" : "3.5.1",
      "source" : "account",
      "mp_lib" : "swift",
      "$ae_iap_price" : "79",
      "time" : 1699292313803,
      "$screen_width" : 390,
      "boost_active" : true,
      "$model" : "iPhone14,2",
      "$app_build_number" : "22269",
      "$device_id" : "E141B342-4FF1-4F5D-9A28-7DDB7F62DE1A",
      "$carrier" : "",
      "distinct_id" : "178467943",
      "$wifi" : true,
      "hardware_id" : "9483a7bd73066a4a68c1f3855bf67e80",
      "$user_id" : "178467943",
      "token" : "1034e0665ab7f8e072536319e6caf8e1",
      "pro_status" : "pro",
      "$screen_height" : 844,
      "profile_type" : "profile",
      "$radio" : "LTE",
      "$ae_iap_name" : "v1_scruff_boost60min_1pack_0_none",
      "$manufacturer" : "Apple",
      "$os_version" : "15.3.1",
      "$had_persisted_distinct_id" : true,
      "$app_version_string" : "7.12.0",
      "$ae_iap_quantity" : 1,
      "$os" : "iOS"
    },
    "id" : 5409,
    "event" : "$ae_iap"
  },
  {
    "properties" : {
      "source" : "account",
      "mp_lib" : "swift",
      "$screen_width" : 390,
      "time" : 1699292339973,
      "boost_active" : false,
      "$model" : "iPhone14,2",
      "$app_build_number" : "22269",
      "$device_id" : "E141B342-4FF1-4F5D-9A28-7DDB7F62DE1A",
      "$carrier" : "",
      "distinct_id" : "178467943",
      "$wifi" : true,
      "hardware_id" : "9483a7bd73066a4a68c1f3855bf67e80",
      "$user_id" : "178467943",
      "token" : "1034e0665ab7f8e072536319e6caf8e1",
      "pro_status" : "pro",
      "$screen_height" : 844,
      "profile_type" : "profile",
      "$radio" : "LTE",
      "$lib_version" : "3.5.1",
      "$manufacturer" : "Apple",
      "$os_version" : "15.3.1",
      "$had_persisted_distinct_id" : true,
      "$app_version_string" : "7.12.0",
      "flavor" : "scruff",
      "$os" : "iOS"
    },
    "$mp_metadata" : {
      "$mp_event_id" : "c75e15fda8b4e007",
      "$mp_session_start_sec" : 0,
      "$mp_session_seq_id" : 4,
      "$mp_session_id" : "326fb8859f88fe05"
    },
    "id" : 5410,
    "event" : "account: viewed"
  },
  {
    "properties" : {
      "source" : "account",
      "time" : 1699292341142,
      "$screen_width" : 390,
      "mp_lib" : "swift",
      "boost_active" : true,
      "$model" : "iPhone14,2",
      "$app_build_number" : "22269",
      "$device_id" : "E141B342-4FF1-4F5D-9A28-7DDB7F62DE1A",
      "$carrier" : "",
      "distinct_id" : "178467943",
      "$wifi" : true,
      "hardware_id" : "9483a7bd73066a4a68c1f3855bf67e80",
      "$user_id" : "178467943",
      "pro_status" : "pro",
      "token" : "1034e0665ab7f8e072536319e6caf8e1",
      "$screen_height" : 844,
      "profile_type" : "profile",
      "$radio" : "LTE",
      "$lib_version" : "3.5.1",
      "$manufacturer" : "Apple",
      "$os_version" : "15.3.1",
      "$app_version_string" : "7.12.0",
      "$had_persisted_distinct_id" : true,
      "flavor" : "scruff",
      "$os" : "iOS"
    },
    "id" : 5411,
    "$mp_metadata" : {
      "$mp_event_id" : "86cebccb1f6d707b",
      "$mp_session_start_sec" : 0,
      "$mp_session_seq_id" : 5,
      "$mp_session_id" : "326fb8859f88fe05"
    },
    "event" : "boost: purchase_viewed"
  },
  {
    "$mp_metadata" : {
      "$mp_event_id" : "986e62aaea1d99b8",
      "$mp_session_start_sec" : 0,
      "$mp_session_seq_id" : 6,
      "$mp_session_id" : "326fb8859f88fe05"
    },
    "properties" : {
      "source" : "account",
      "mp_lib" : "swift",
      "$screen_width" : 390,
      "time" : 1699292360652,
      "boost_active" : true,
      "$model" : "iPhone14,2",
      "$app_build_number" : "22269",
      "$device_id" : "E141B342-4FF1-4F5D-9A28-7DDB7F62DE1A",
      "$carrier" : "",
      "distinct_id" : "178467943",
      "$wifi" : true,
      "hardware_id" : "9483a7bd73066a4a68c1f3855bf67e80",
      "$user_id" : "178467943",
      "token" : "1034e0665ab7f8e072536319e6caf8e1",
      "pro_status" : "pro",
      "$screen_height" : 844,
      "profile_type" : "profile",
      "$radio" : "LTE",
      "$lib_version" : "3.5.1",
      "$os_version" : "15.3.1",
      "$app_version_string" : "7.12.0",
      "$manufacturer" : "Apple",
      "$had_persisted_distinct_id" : true,
      "flavor" : "scruff",
      "$os" : "iOS"
    },
    "id" : 5412,
    "event" : "boost: purchase_viewed"
  }
]
}
$done({ body: JSON.stringify(objc) });