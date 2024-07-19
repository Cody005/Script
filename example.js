// Ensure AES_Decrypt and AES_Encrypt functions are available in your environment
// Mock functions are for illustration purposes; replace with actual implementations if needed

// Step 1: Parse the response to get the encrypted content
var responseObj = JSON.parse($response.body);
let encryptedContent = responseObj.data.svr_info_encrypt; // Use the correct key for encrypted content

// Step 2: Decrypt the encrypted content
let decryptedContent = AES_Decrypt(encryptedContent);

// Step 3: Replace the decrypted content with your specific data
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

// Convert the modified content to a JSON string for encryption
let jsonString = JSON.stringify(modifiedContent);

// Step 4: Encrypt the modified content
let encryptedModifiedContent = AES_Encrypt(jsonString);

// Step 5: Construct the new response object with the encrypted modified content
var newResponse = {
    "status": 1,
    "message": "成功", // You can modify or remove this message as needed
    "data": {
        "svr_info_encrypt": encryptedModifiedContent
    }
};

// Debugging: Log the final response for verification
console.log(newResponse);

// Step 6: Return the final response
$done({ body: JSON.stringify(newResponse) });
