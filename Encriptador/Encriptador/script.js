const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");

encryptBtn.addEventListener("click", () => {
  const originalText = document.getElementById("original-text").value;
  const shift = document.getElementById("shift").value;
  const encryptedText = encrypt(originalText, shift);
  document.getElementById("encrypted-text").value = encryptedText;
});

decryptBtn.addEventListener("click", () => {
  const encryptedText = document.getElementById("encrypted-text").value;
  const shift = document.getElementById("shift").value;
  const originalText = decrypt(encryptedText, shift);
  document.getElementById("original-text").value = originalText;
});

function encrypt(text, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const index = alphabet.indexOf(char.toLowerCase());

    if (index === -1) {
      encryptedText += char;
      continue;
    }

    const newIndex = (index + parseInt(shift)) % alphabet.length;
    const newChar = alphabet[newIndex];
    encryptedText += char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
  }

  return encryptedText;
}

function decrypt(text, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let decryptedText = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const index = alphabet.indexOf(char.toLowerCase());

    if (index === -1) {
      decryptedText += char;
      continue;
    }

    const newIndex = (index - parseInt(shift) + alphabet.length) % alphabet.length;
    const newChar = alphabet[newIndex];
    decryptedText += char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
  }

  return decryptedText;
}
    // JavaScript source code
