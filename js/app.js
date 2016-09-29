window.addEventListener("load", function() {
	
	var toDo = document.getElementById("toDo");//contenedor de textarea y boton
	var errand = document.getElementById("errand");//textarea
	var agregar = document.getElementById("agregar");//boton
	var toDoList = document.getElementById("toDoList");//contenedor de las tareas agregadas
	

	errand.addEventListener("keyup", function(){
			if (errand.value.length > 0) {
				agregar.disabled = false;
		}
	});
	
	agregar.addEventListener("click", function(){
		
		var item = document.createElement("div");//donde se imprimiran las tareas
		toDoList.appendChild(item);
		item.classList.add("item");
		
		var task = errand.value.trim();//task=lo que se escribe en el errand
		item.innerHTML = task;//´para agregar valor
		
		var checkBox = document.createElement("input");
		checkBox.setAttribute("type", "checkbox");
		checkBox.classList.add("pull-left");
		item.insertBefore(checkBox, item.childNodes[0]);
		errand.value = ""; //para limpiar lo escrito despues de agregar(boton)
		agregar.disabled = true; //para que se desactive el boton
		
		check(item, checkBox);

		var trash = document.createElement("span");
		item.insertBefore(trash, item.childNodes[2]);
		trash.classList.add("glyphicon", "glyphicon-trash", "pull-right");
		trash.setAttribute("aria-hidden", "true");

		garbage(item, trash);

	});

	function garbage(item, trash) {
		trash.addEventListener("click", function(){
			item.style.display = "none";
		})
	}

	function check(item, checkBox) {
		checkBox.addEventListener("click", function(){
			item.classList.toggle("crossed");
		});
	}
});