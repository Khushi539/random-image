function validateForm() {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  
  const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/
  if (!nameRegex.test(name)) {
    alert("Please enter at least two words for the name.")
    return false
  }

  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid Gmail address.")
    return false
  }

  
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters long and include a number, uppercase letter, and a special character."
    )
    return false
  }

  
  return true
}
