function AES_Decrypt(encryptedText) {
    return decryptedText;  // Replace with the actual decrypted text
}

function AES_Encrypt(plainText) {
    return encryptedText;  // Replace with the actual encrypted text
}

var responseObj = JSON.parse($response.body);
let encryptedContent = responseObj.data.mgmdev_encrypt;

let decryptedContent = AES_Decrypt(encryptedContent);

let parsedContent = JSON.parse(decryptedContent);

parsedContent.entitlements = [
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
];
parsedContent.is_valid = true;

let modifiedContent = JSON.stringify(parsedContent);
let encryptedModifiedContent = AES_Encrypt(modifiedContent);

responseObj.data.mgmdev_encrypt = encryptedModifiedContent;

let finalResponse = JSON.stringify(responseObj);
$done({ body: finalResponse });
