
function generateRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}


document.getElementById("generateColorButton").addEventListener("click", () => {
  const randomColor = generateRandomColor()
  const colorBox = document.getElementById("colorBox")
  colorBox.style.backgroundColor = randomColor

  
  saveColor(randomColor)
})


function saveColor(color) {
  const savedColorsList = document.getElementById("savedColorsList")

  
  const listItem = document.createElement("li")
  listItem.style.backgroundColor = color
  listItem.textContent = color

  
  savedColorsList.appendChild(listItem)
}
