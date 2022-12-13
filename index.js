const imagesRandom = document.querySelectorAll(".random-images div[class^='image']")
// console.log(imagesRandom)

const imagesOrdered = document.querySelectorAll(".ordered-images div[class^='image']")
// console.log(imagesOrdered)



imagesRandom.forEach(image => {
  image.addEventListener("dragstart", event => {
    image.children[0].id = "imagen"
    event.dataTransfer.setData("id", image.children[0].id)
    event.dataTransfer.setData("class", image.classList[0])
  })

  image.addEventListener("dragend", event => {
    image.children[0].id = ""
  })
})


imagesOrdered.forEach(image => {
  image.addEventListener("dragover", event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy"
  })
  
  image.addEventListener("dragenter", event => {
    event.target.classList.add("background");
    
  })

  image.addEventListener("dragleave", event => {
    event.target.classList.remove("background");
    
  })

  image.addEventListener("drop", event => {
    event.target.classList.remove("background");
    const id_image =event.dataTransfer.getData("id")
    const imagen = document.getElementById(id_image)

    const class_image =event.dataTransfer.getData("class")
    // console.log(class_image)

    if (image.classList[0] === class_image) {
      image.children[0].style["visibility"] = "visible"
      image.children[0].style["border"] = "none"

      imagen.style["visibility"] = "hidden"
    }
  })
})