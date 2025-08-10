function toggleModel() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img e substituir a img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver o light mode subistituir a img
    img.setAttribute("src", "./assets/Avatar.png")
  } else {
    img.setAttribute("src", "./assets/Avatar-root.png")
  }
}
