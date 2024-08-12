//Select Light button for light mode
let light = 
  document.querySelector("#lightmode")
console.log(light)


let body = 
  document.querySelector("body")
let cards= 
  document.querySelectorAll(".card")
console.log(cards)
let h4=
  document.querySelector("#jtslim")

// add event listenor for light 
light.addEventListener("click", function(event){
  
  for(let i = 0; i < cards.length; i++){
  
 body.style.backgroundColor = "lightyellow"
cards[i].style.backgroundColor = "lightyellow"
 h4.style.backgroundColor = "lightyellow"
  }
})


