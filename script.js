var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ol");
var input2 = document.getElementById("userinput2");
var button2 = document.getElementById("enter2");
var input3 = document.getElementById("userinput3");
var button3 = document.getElementById("enter3");




function createListElement() {
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

}



button.addEventListener("click",function() {
	if (input.value != "") { 
		createListElement();
	}else {
		alert("Enter Item first!")
	}
})

input.addEventListener("keypress",function(event) {
	if (input.value != "" && event.which == 13) {
		createListElement();
	}
})


var linet = document.querySelectorAll("li");


function loop() {
	for(i = 0; i <= document.getElementById("li2").getElementsByTagName("li").length; i++)
			if (input2.value == i) { 

                let myList = document.getElementsByTagName('ol')[0];
                let firstListItem = document.querySelectorAll('li')[i-1];
                firstListItem.classList.add("line");
			}else {
				console.log("nooo")
			}
}

button2.addEventListener("click",function() {
    if (input2.value != "") {
		loop();
		input2.value = "";
	}else{
		console.log("noo111");

		return console.log("i am dumb");
	}
})

input2.addEventListener("keypress",function(event) {
	if (input2.value != "" && event.which == 13) {
		loop();
		input2.value = "";
	}
})


function remove() {
	for(j = 0; j <= document.getElementById("li2").getElementsByTagName("li").length; j++)
			if (input3.value == j) { 

                let myList = document.getElementsByTagName('ol')[0];
                let firstListItem = document.querySelectorAll('li')[j-1];
                firstListItem.remove();
			}else {
				console.log("nooo")
			}
}

button3.addEventListener("click",function() {
    if (input3.value != "") {
		remove();
		input3.value = "";
	}else{
		console.log("noo111");

		return console.log("i am dumb");
	}
})

input3.addEventListener("keypress",function(event) {
	if (input3.value != "" && event.which == 13) {
		remove();
		input3.value = "";
	}
})




