/**
 * Encrypts data and modifies the response body.
 *
 * @param {string} data - The data to be encrypted.
 * @returns {string} The Base64 encoded data.
 *
 * @example
 * // Example usage:
 * var objc = JSON.parse($response.body);
 * objc = {
 *     "encrypted_data": encryptData(JSON.stringify(objc))
 * };
 * $done({body : JSON.stringify(objc)});
 */
function encryptData(data) {
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
    return btoa(data); // Base64 encoding for demonstration purposes
}
