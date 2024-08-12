console.log("Script running...");
//Select the ghana facts element 
let header = document.getElementById('ghana-facts');
header.addEventListener('mouseover', function(event){
  header.style.fontSize = '70px';
});

let ghana6 = 
  document.querySelector("#Ghana")
//Add an event listenor where when you click the image it changes
ghana6.addEventListener("click", function(event){
  ghana6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_7-6NAGkfj71vgnKB84LZOV_hG0nyh4zrw&s"
})

