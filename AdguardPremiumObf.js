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
