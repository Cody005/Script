// Assuming AES_Decrypt and AES_Encrypt are available encryption/decryption functions

// Step 1: Parse the response to get the encrypted content
var responseObj = JSON.parse($response.body);
let encryptedContent = responseObj.data.mgmdev_encrypt;

// Step 2: Decrypt the encrypted content
let decryptedContent = AES_Decrypt(encryptedContent);

// Step 3: Parse the decrypted content
let parsedContent = JSON.parse(decryptedContent);

// Step 4: Apply modifications
parsedContent = modifyDecryptedContent(parsedContent);

// Function to apply custom modifications to the decrypted content
function modifyDecryptedContent(content) {
    // Add your custom modification script here
var objc = JSON.parse($response.body);
objc = {
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

$done({ body: JSON.stringify(objc) });
   
    // Add more custom scripts as needed

    return content;
}

// Step 5: Encrypt the modified content
let modifiedContent = JSON.stringify(parsedContent);
let encryptedModifiedContent = AES_Encrypt(modifiedContent);

// Step 6: Construct the new response object with the encrypted modified content
responseObj.data.mgmdev_encrypt = encryptedModifiedContent;

// Final response
let finalResponse = JSON.stringify(responseObj);
$done({ body: finalResponse });