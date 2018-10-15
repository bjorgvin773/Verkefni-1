var test = `virkar`;

var mainDiv = document.querySelector("#main");
mainDiv.innerHTML = `
    <ul class="list"></ul>
    Fyrri <input id="eitt" type="text" />
    Seinni: <input id="tvo" type="text" />
    <button class="button">add to div</button>
`
var button = document.querySelector(".button");
var list = document.querySelector(".list");
var inputEitt = document.querySelector("#eitt");
var inputTvo = document.querySelector("#tvo");
var divs = function(){
    console.log(test);

    list.innerHTML += getEvent(inputEitt.value, inputTvo.value)

}
button.onclick = divs;

var getEvent = function(inputEitt, inputTvo){
    var divMachine = `
			<div class="info">
				<h1>${inputEitt}</h1>
				<h1>${inputTvo}</h1>
			</div>
    `
    return divMachine;
}