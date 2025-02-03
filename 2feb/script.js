let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let imageContainer = document.querySelector(".main")
    let image = document.createElement("img");
    let images = [
      "https://plus.unsplash.com/premium_photo-1664299631876-f143dc691c4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1612878010854-1250dfc5000a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVubnl8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1664392309182-017207df3537?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnVubnl8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1670155258114-f6f2c64f4f37?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZ1bm55fGVufDB8fDB8fHww",
    ]
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];
    
    imageContainer.appendChild(image);
    console.log(image);
})
