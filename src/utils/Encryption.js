class Encryption {
    constructor(key) {
        this.key = key;
    }

    encrypt(plaintext) {
        let encrypted = "";
        for (let i = 0; i < plaintext.length; i++) {
            let keyChar = this.key.charCodeAt(i % this.key.length);
            let encryptedChar = String.fromCharCode((plaintext.charCodeAt(i) + keyChar) % 256);
            encrypted += encryptedChar;
        }
        return btoa(encrypted);
    }

    decrypt(ciphertext) {
        let decrypted = "";
        ciphertext = atob(ciphertext);
        for (let i = 0; i < ciphertext.length; i++) {
            let keyChar = this.key.charCodeAt(i % this.key.length);
            let decryptedChar = String.fromCharCode((ciphertext.charCodeAt(i) - keyChar + 256) % 256);
            decrypted += decryptedChar;
        }
        return decrypted;
    }
}

export default Encryption;
