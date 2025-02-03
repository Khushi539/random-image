document.getElementById("generateButton")
  .addEventListener("click", generatePassword)
document.getElementById("copyButton").addEventListener("click", copyPassword)

function generatePassword() {
  const length = document.getElementById("length").value
  const includeUppercase = document.getElementById("uppercase").checked
  const includeNumbers = document.getElementById("numbers").checked
  const includeSpecial = document.getElementById("special").checked

  let characters = "abcdefghijklmnopqrstuvwxyz"
  if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (includeNumbers) characters += "0123456789"
  if (includeSpecial) characters += "!@#$%^&*()_+[]{}|;:,.<>?"

  let password = ""
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password += characters.charAt(randomIndex)
  }

  document.getElementById("password").value = password
}

function copyPassword() {
  const passwordField = document.getElementById("password")
  passwordField.select()
  document.execCommand("copy")
  alert("Password copied to clipboard!")
}
