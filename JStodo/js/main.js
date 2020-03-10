var todoItems = ["stuff", "cake"];

	function doStuff() {
		for (var i = 0; i < todoItems.length; i++)
		{
			todoItemStuff = "<li class='list_todo_items' onclick='checked(this)'>" + todoItems[i] + "<button onclick='remove(" + i + ")' class='remove'>x</button></li>"
			document.getElementById('todo_list').innerHTML += todoItemStuff;
		}
	}

	function show() {
		document.getElementById('todo_list').innerHTML = "";
		var inputValue = form.todo_input.value;
		if(inputValue === '') {
			alert("'Write something foo'");
		}

		else {
			doStuff();
		}
	}

function add(form) {
	var inputValue = form.todo_input.value;
	todoItems.push(inputValue);
	document.getElementById('todo_list').innerHTML = "";
	show();
}

function remove(id) {
	todoItems.splice(id, 1);
	var buttons = document.getElementsByClassName('remove');
	
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', remove);
	}
	show();
}

function checked(tag) {
	tag.classList.toggle('active');
}

function clearThis(target) {
	target.value = "";
}

function sort() {
	todoItems.sort();
	document.getElementById("todo_list").innerHTML = "";
	doStuff();
}

function reverse() {
	todoItems.reverse();
	document.getElementById("todo_list").innerHTML = "";
	doStuff();
}