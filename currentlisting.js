console.log("currentlisting.js running...");
//Select ghana facts 2 element

let header = document.getElementById('ghana-facts2');
console.log(header)

//Click the text tag so when you click on the text it clicks into 'Vote for me for best real estate agent'
header.addEventListener('click', function(event){
  console.log("clicked")
  header.textContent = 'Vote for me for best real estate agent';
});