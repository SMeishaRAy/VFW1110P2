/*JS page for Catch-A-HotRod
	Author: S. Meisha Ray
	Term: VFW1110 Project 2
	Created: September 30, 2011
*/

//DOM - method when the dom has loaded it will run this function.
window.addEventListener("DOMContentLoaded", function(){
	
	//get element by id function. shortcut
		function $(x){
			var theElement = document.getElementById(x);
			return theElement;
		}
	//create select field element and populate options.
		function makeList(){
			var formTag = document.getElementsByTagName("form");//formTag is an array of all form tags.
				selectLi = $('select');
				makeSelect = document.createElement('select');
				makeSelect.setAttribute("id", "groups");
			for(var i = 0, j = shows.length; i<j; i++){
				var makeOption = document.createElement('option');
					var optText = shows[i];
					makeOption.setAttribute("value", optText);
					makeOption.innerHTML = optText;
					makeSelect.appendChild(makeOption);
		}
			selectLi.appendChild(makeSelect);
	}
	//Find value of selected radio button.
		function getSelectedRadio(){
		var radios = document.forms[0].sex;
			for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				sexValue = radios[i].value;
			}
		}
	}
		function getCheckBoxValue(){
		if($('updates').checked){
			updateValue = $('updates').value;
		}else{
			updateValue = "No";
		}
	}
		function toggleControls(n){
		switch(n){
			case "on":
				$('form').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('form').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	)
		function storeData(){
			var id 			= Math.floor(Math.random()*1000001);//local storage
			//Gather up all of form field values and store in an object.
			//Object properties contain an array with the form label and input values.
			getSelectedRadio();
			getCheckedBoxValue();
			var item		= {};
				item.signup = ["Information:", $('signup').value];
				item.fname  = ["First Name:", $('fname').value];
				item.lname  = ["Last Name:", $('lname').value];
				item.email  = ["Email:", $('email').value];
				item.user 	= ["UserName:", $('username').value];
				item.sex	= ["Sex:", sexValue];
				item.updates = ["Updates:", updateValue];
				item.rating	= ["Rating:", $('rating').value];
				item.notes	= ["Comments:" $('comments').value];
			//Save data into Local Storage: Use Stringify to convert our object to a string.
			localStorage.setItem(id, JSON.stringify(item));
				alert("Thank you. Your Information was Saved!");
	}
		function getData(){
			toggleControls("on");
				if(localStorage.length === 0){
					alert("There is no data in local storage.");
				}
			//Write Data rom Local Storage to the browser. 
			var makeDiv = document.createElement('div');
			makeDiv.setAttribute("id", "items");
			var makeList = document.createElement('ul');
			makeDiv.appendChild(makeList);
			document.body.appendChild(makeDiv);	
			$('items').style.display = "block";
				for(var i=0; len=localStorage.length; i<len; i++){
					var makeli = document.createElement('li');
					makeList.appendChild(makeli);
					var key = localStorage.key(i);
					var value = localStorage.getItem(key);
					//convert the string from local storage value back to an object by using JSON.parse().
					var obj = JSON.parse(value);
					var makeSubList = document.createElement('ul');
					makeli.appendChild(makeSubList);
					for(var n in obj){
						var makeSubLi = document.creteElement('li');
						makeSubList.appendChild(makeSubLi);
						var optSubText = obj[n][0]+" "+obj[n][1];
						makeSubli.innerHTML = optSubText;
			}
		}
	}
		
		function clearLocal(){
			if(localStorage.length === 0){
				alert("There is no data to clear.");
			}else{
				localStorage.clear();
				alert("All data is removed!");
				window.location.reload();
				return false;
		}
	}
	
		/*localStorage
		Storage.prototype.setObject = function(key, value){
			this.setItem(key, JSON.stringify(value));
		}
		
		Storage.prototype.getObject = function(key){
			return JSON.parse(this.getItem(key));
		}*/
	
	Default Vars for my list of shows.
			var shows = ["--Choose One--", "Chevy", "Corvette", "Camaro", "Ford", "Mopar", "Tuner", "Antique", "Classic", "Low-Riders", "Lifted-Rides"]; 
			sexValue;
			updateValue = "No";
			makeList();
	// Set Link & Submit Click 
			var displayLink = $('displayLink');
			displayLink.addEventListener("click", getData);//execute a getData function
			var clearLink = $('clear');
			clearLink.addEventListener("click", clearLocal);//clears all data
			//Save Data function
			var save = $("submit");
			save.addEventListener("click", storeData);
			alert("Thank you, your form has been submitted.");
});


