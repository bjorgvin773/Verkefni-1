var test = `virkar`;

var mainDiv = document.querySelector("#main");
mainDiv.innerHTML = `
    <button class="button">Change the color</button>
`
var thebody = document.querySelector("#body")
var button = document.querySelector(".button")

var changeColor = function(){
    var litabreytir = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = litabreytir; 
}

    

button.onclick = changeColor;