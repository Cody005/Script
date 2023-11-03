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

var objc = JSON.parse($response.body);

    objc = {
  "status" : active,
  "receipt" : {
    "app_item_id" : 17999170,
    "receipt_creation_date" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
    "receipt_type" : "Production",
    "bundle_id" : "com.5skay.protectad",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1699034551000",
        "expires_date" : "2099-01-01 00:00:00 +0000 Europe/Copenhagen",
        "expires_date_pst" : "2099-01-01 00:00:00 +0000 Europe/Copenhagen",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "17999170",
        "is_trial_period" : "false",
        "original_transaction_id" : "17999170",
        "original_purchase_date_pst" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
        "product_id" : "com.5skay.protectad.sub.year",
        "purchase_date" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
        "original_purchase_date_ms" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
        "expires_date_ms" : "4070908800000",
        "purchase_date_pst" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
        "original_purchase_date" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen"
      }
    ],
    "download_id" : 17999170,
    "adam_id" : 17999170,
    "receipt_creation_date_pst" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
    "request_date" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
    "request_date_pst" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
    "version_external_identifier" : 0,
    "request_date_ms" : "1699034551000",
    "original_purchase_date_pst" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
    "application_version" : "1.4",
    "original_purchase_date_ms" : "1699034551000",
    "receipt_creation_date_ms" : "1699034551000",
    "original_application_version" : "1.4",
    "original_purchase_date" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen"
  },
  "environment" : "Production",
  "latest_receipt" : "eyJhcHBfaXRlbV9pZCI6MTc5OTkxNzAsInJlY2VpcHRfY3JlYXRpb25fZGF0ZSI6IjIwMjMtMTEtMDMgMTg6MDI6MzEgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwicmVjZWlwdF90eXBlIjoiUHJvZHVjdGlvbiIsImJ1bmRsZV9pZCI6ImNvbS41c2theS5wcm90ZWN0YWQiLCJvcmlnaW5hbF9wdXJjaGFzZV9kYXRlIjoiMjAyMy0xMS0wMyAxODowMjozMSArMDAwMCBFdXJvcGVcL0NvcGVuaGFnZW4iLCJpbl9hcHAiOlt7InF1YW50aXR5IjoiMSIsInB1cmNoYXNlX2RhdGVfbXMiOiIxNjk5MDM0NTUxMDAwIiwiZXhwaXJlc19kYXRlIjoiMjA5OS0wMS0wMSAwMDowMDowMCArMDAwMCBFdXJvcGVcL0NvcGVuaGFnZW4iLCJleHBpcmVzX2RhdGVfcHN0IjoiMjA5OS0wMS0wMSAwMDowMDowMCArMDAwMCBFdXJvcGVcL0NvcGVuaGFnZW4iLCJpc19pbl9pbnRyb19vZmZlcl9wZXJpb2QiOiJmYWxzZSIsInRyYW5zYWN0aW9uX2lkIjoiMTc5OTkxNzAiLCJpc190cmlhbF9wZXJpb2QiOiJmYWxzZSIsIm9yaWdpbmFsX3RyYW5zYWN0aW9uX2lkIjoiMTc5OTkxNzAiLCJvcmlnaW5hbF9wdXJjaGFzZV9kYXRlX3BzdCI6IjIwMjMtMTEtMDMgMTg6MDI6MzEgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwicHJvZHVjdF9pZCI6IiIsInB1cmNoYXNlX2RhdGUiOiIyMDIzLTExLTAzIDE4OjAyOjMxICswMDAwIEV1cm9wZVwvQ29wZW5oYWdlbiIsIm9yaWdpbmFsX3B1cmNoYXNlX2RhdGVfbXMiOiIyMDIzLTExLTAzIDE4OjAyOjMxICswMDAwIEV1cm9wZVwvQ29wZW5oYWdlbiIsImV4cGlyZXNfZGF0ZV9tcyI6IjQwNzA5MDg4MDAwMDAiLCJwdXJjaGFzZV9kYXRlX3BzdCI6IjIwMjMtMTEtMDMgMTg6MDI6MzEgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwib3JpZ2luYWxfcHVyY2hhc2VfZGF0ZSI6IjIwMjMtMTEtMDMgMTg6MDI6MzEgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIn1dLCJhZGFtX2lkIjoxNzk5OTE3MCwicmVjZWlwdF9jcmVhdGlvbl9kYXRlX3BzdCI6IjIwMjMtMTEtMDMgMTg6MDI6MzEgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwicmVxdWVzdF9kYXRlIjoiMjAyMy0xMS0wMyAxODowMjozMSArMDAwMCBFdXJvcGVcL0NvcGVuaGFnZW4iLCJyZXF1ZXN0X2RhdGVfcHN0IjoiMjAyMy0xMS0wMyAxODowMjozMSArMDAwMCBFdXJvcGVcL0NvcGVuaGFnZW4iLCJ2ZXJzaW9uX2V4dGVybmFsX2lkZW50aWZpZXIiOjAsInJlcXVlc3RfZGF0ZV9tcyI6IjE2OTkwMzQ1NTEwMDAiLCJvcmlnaW5hbF9wdXJjaGFzZV9kYXRlX3BzdCI6IjIwMjMtMTEtMDMgMTg6MDI6MzEgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwiYXBwbGljYXRpb25fdmVyc2lvbiI6IjEuNCIsIm9yaWdpbmFsX3B1cmNoYXNlX2RhdGVfbXMiOiIxNjk5MDM0NTUxMDAwIiwicmVjZWlwdF9jcmVhdGlvbl9kYXRlX21zIjoiMTY5OTAzNDU1MTAwMCIsIm9yaWdpbmFsX2FwcGxpY2F0aW9uX3ZlcnNpb24iOiIxLjQiLCJkb3dubG9hZF9pZCI6MTc5OTkxNzB9",
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1699034551000",
      "expires_date" : "2099-01-01 00:00:00 +0000 Europe/Copenhagen",
      "expires_date_pst" : "2099-01-01 00:00:00 +0000 Europe/Copenhagen",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "17999170",
      "is_trial_period" : "false",
      "original_transaction_id" : "17999170",
      "original_purchase_date_pst" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
      "product_id" : "com.5skay.protectad.sub.year",
      "purchase_date" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
      "original_purchase_date_ms" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
      "expires_date_ms" : "4070908800000",
      "purchase_date_pst" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen",
      "original_purchase_date" : "2023-11-03 18:02:31 +0000 Europe/Copenhagen"
    }
  ],
  "pending_renewal_info" : [
    {
      "product_id" : "com.5skay.protectad.sub.year",
      "original_transaction_id" : "4A984383-1C64-45E7-AE4E-E33D19045155",
      "auto_renew_product_id" : "NULL",
      "auto_renew_status" : "1"
    }
  ]
}
$done({body : JSON.stringify(objc)});
