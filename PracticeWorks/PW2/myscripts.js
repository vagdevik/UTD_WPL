// enter key 
var input = document.getElementById("todo_input");
	input.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {  
  		addItem();
	}
	});

// add a new element
function addItem(){
	const item = document.getElementById("todo_input");
	todo_value = item.value;
	console.log(todo_value);
	if (todo_value===''){
		alert("Please enter some text.")
	}
	else{
		const ul = document.getElementById("todo_list_ul");
		const li = document.createElement("li");
		
		// adding text item to list
		const textnode = document.createTextNode(item.value);

		li.appendChild(textnode);
		const span = document.createElement("span");

		// adding eraser icon to the item in the list
		span.className = "bi bi-eraser";
		span.setAttribute('id',item.value);
		
		li.appendChild(span);
		ul.appendChild(li);
	}
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev){

	// strike through on click
	if (ev.target.tagName === 'LI') {

		ev.target.classList.toggle('checked');  
		ev.target.classList.toggle('cont');

	}

	// remove item on click
	if (ev.target.nodeName === 'SPAN') {

		var items = document.querySelectorAll("#todo_list_ul");
		var ul = document.getElementById("todo_list_ul");
	    var li = document.getElementById("todo_input");
	    var item = document.getElementById(ev.target.id);
	    ul.removeChild(item.parentNode);
	}

}, false);
