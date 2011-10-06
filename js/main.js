/*JS page for Catch-A-HotRod
	Author: S. Meisha Ray
	Term: VFW1110 Project 2 web app part 2
	Created: October 6, 2011
*/

//DOM - method when the dom has loaded it will run this function.
window.addEventListener("DOMContentLoaded", function () { 

	//get element by id function. shortcut
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;	
	} 	
	
	//Default variables
		var shows = ["--Choose One--", "Chevy", "Corvette", "Camaro", "Ford", "Mopar", "Tuner", "Antique", "Classic", "Low-Riders", "Lifted-Rides"], 
		var sexValue,
		var updateValue = "No";
		
	//create select field element and populate options.
		function makeList(){
			var formTag = document.getElementsByTagName("form");//formTag is an array of all form tags.
			var	selectLi = $('select');
			var makeSelect = document.createElement('select');
				makeSelect.setAttribute("id", "choices");
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
		var radio = document.forms[0].sex;
		for(var i=0; i<radio.length; i++){
			if(radio[i].checked){
				sexValue = radio[i].value;
			}
		}
	}
		function getCheckBoxValue(){
			if($('checkBox').checked){
				updateValue = $('checkBox').value;
		}else{
			updateValue = "No";
		}
	}
		/*function is_it_checked(){
			var y_n = document.getElementById("yes_no");
			if (y_n.checked){
			alert("Yes, The box is checked!");
			}else{
			alert("No, the box is not checked!");
		}
	}*/
		function toggleControls(p){
		switch(p){
			case "on":
				$('signup').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('signup').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
		function storeData(){
			var id 			= Math.floor(Math.random()*10900001);//local storage
		//Gather up all of form field values and store in an object.
		//Object properties contain an array with the form label and input values.
			getSelectedRadio();
			getCheckBoxValue();
			var item			= {};
				item.group		= ["HotRod Show:", $('groups').value];
				item.fname  	= ["Full Name:", $('fname').value];
				item.email  	= ["Email:", $('email').value];
				item.userName 	= ["UserName:", $('username').value];
				item.bday		= ["Birthdate:", $('bday').value;]

				item.sex		= ["Sex:", sexValue];
				item.updates	= ["Email Updates", updatesValue];
				
				item.rating		= ["Rating:", $('rating').value];
				item.comments	= ["Comments:", $('comments').value];
			//Save data into Local Storage: Use Stringify to convert our object to a string.
			localStorage.setItem(id, JSON.stringify(item));
				alert("Thank you. Your Information was Submitted!");
	}
		function getData(){
			toggleControls("on");
				if(localStorage.length === 0){
					alert("There is no data in local storage.");
					}
			//Write Data from Local Storage to the browser. 
			var makeDiv = document.createElement('div');
			makeDiv.setAttribute("id", "items");
			var makeList = document.createElement('ul');
			makeDiv.appendChild(makeList);
			document.body.appendChild(makeDiv);	
			$('items').style.display = "block";
				for(var i=0, len=localStorage.length; i<len; i++){
					var makeli = document.createElement('li');
					makeList.appendChild(makeli);
					var key = localStorage.key(i);
					var value = localStorage.getItem(key);
				//convert string from local storage value back to an object by using JSON.parse().
					var obj = JSON.parse(value);
					var makeSubList = document.createElement('ul');
					makeli.appendChild(makeSubList);
					for(var n in obj){
						var makeSubLi = document.createElement('li');
						makeSubList.appendChild(makeSubLi);
						var optSubText = obj[n][0]+" "+obj[n][1];
						makeSubLi.innerHTML = optSubText;
				}
			}
		}
		
		function clearLocal(){
			if(localStorage.length === 0){
				alert("There is no data to clear.");
			}else{
				localStorage.clear();
				alert("All data has been removed from local storage!");
				window.location.reload();
				return false;
			}
		}	
		
		makeList();
		
		// Set Link & Submit Click 
			var displayLink = $('displayLink');
			displayLink.addEventListener("click", getData);//execute a getData function
			
			var clearLink = $('clear');
			clearLink.addEventListener("click", clearLocal);//clears all data
			
			var save = $('submit');
			save.addEventListener("click", storeData);//Save Data function
			
});	

