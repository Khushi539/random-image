//Add a shadow to all <img> elements when the page loads
    let images = document.querySelectorAll("img");

    images.forEach(image => {
        image.style.boxShadow = "10px 10px 25px rgba(0,0,0,0.5)";
    });
