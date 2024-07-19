var responseObj = JSON.parse($response.body);
let encryptedContent = responseObj.data.svr_info_encrypt;

let decryptedContent = AES_Decrypt(encryptedContent); 

let content = JSON.parse(decryptedContent);

let modifiedContent = {
    "entitlements": [
        {
            "redeem": {},
            "expires_date_ms": 3859786074000,
            "purchase_date_ms": 1655289297000,
            "product_identifier": "SpeedTest_RemoveAd_1_Year_20181015",
            "is_in_intro_offer_period": false,
            "environment": "Production",
            "auto_renew": true,
            "is_in_trial_period": false,
            "entitlement_id": "premium"
        }
    ],
    "is_valid": true
};

let jsonString = JSON.stringify(modifiedContent);

// Step 4: Encrypt the modified content
let encryptedModifiedContent = AES_Encrypt(jsonString);

var newResponse = {
    "status": 1,
    "message": "成功",
    "data": {
        "svr_info_encrypt": encryptedModifiedContent 
    }
};

$done({ body: JSON.stringify(newResponse) });
