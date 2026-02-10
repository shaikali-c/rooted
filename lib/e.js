import { webcrypto as crypto } from "crypto";

function arrayToBase64(array) {
  return Buffer.from(array).toString("base64");
}

function base64ToArray(base64) {
  return new Uint8Array(Buffer.from(base64, "base64"));
}

async function deriveKeyFromPassword(password, salt) {
  const encoder = new TextEncoder();
  const passwordBuffer = encoder.encode(password);

  const baseKey = await crypto.subtle.importKey(
    "raw",
    passwordBuffer,
    "PBKDF2",
    false,
    ["deriveKey"],
  );

  const derivedKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    baseKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"],
  );

  return derivedKey;
}

export async function encryptData(plaintext, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));

  const iv = crypto.getRandomValues(new Uint8Array(12));

  const key = await deriveKeyFromPassword(password, salt);

  const encoder = new TextEncoder();
  const dataToEncrypt = {
    content: plaintext,
    metadata: {
      timestamp: Date.now(),
      version: "aes-gcm-v1",
    },
  };

  const dataBuffer = encoder.encode(JSON.stringify(dataToEncrypt));

  const ciphertext = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
      additionalData: encoder.encode("auth"),
      tagLength: 128,
    },
    key,
    dataBuffer,
  );

  const result = {
    salt: arrayToBase64(salt),
    iv: arrayToBase64(iv),
    ciphertext: arrayToBase64(new Uint8Array(ciphertext)),
    algorithm: "AES-256-GCM",
    iterations: 100000,
    hash: "SHA-256",
  };

  return JSON.stringify(result);
}

export async function decryptData(encryptedPackage, password) {
  const pkg = JSON.parse(encryptedPackage);

  const salt = base64ToArray(pkg.salt);
  const iv = base64ToArray(pkg.iv);
  const ciphertext = base64ToArray(pkg.ciphertext);

  const key = await deriveKeyFromPassword(password, salt);

  try {
    const decryptedBuffer = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: iv,
        additionalData: new TextEncoder().encode("auth"),
        tagLength: 128,
      },
      key,
      ciphertext,
    );

    const decoder = new TextDecoder();
    const decryptedData = JSON.parse(decoder.decode(decryptedBuffer));

    return {
      content: decryptedData.content,
      metadata: decryptedData.metadata,
      verified: true,
    };
  } catch (error) {
    throw new Error("Decryption failed: Invalid key or tampered data");
  }
}

// Test the functions
// async function main() {
//   try {
//     const password = "StrongPassword123!";
//     const secretText = `Hello world`;

//     console.log("Original text:", secretText);
//     console.log("---");

//     // Encrypt
//     const encrypted = await encryptData(secretText, password);
//     console.log("Encrypted package:");
//     console.log(JSON.parse(encrypted));
//     console.log("---");

//     // Decrypt with correct password
//     const decrypted = await decryptData(encrypted, password);
//     console.log(decrypted);
//     console.log("Decrypted with correct password:");
//     console.log("Content:", decrypted.content);
//     console.log("Verified:", decrypted.verified);
//     console.log("---");

//     // Try decrypt with wrong password (should fail)
//     try {
//       await decryptData(encrypted, "WrongPassword");
//       console.log("ERROR: Should have failed with wrong password!");
//     } catch (err) {
//       console.log("Correctly failed with wrong password:", err.message);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// // Run the test
