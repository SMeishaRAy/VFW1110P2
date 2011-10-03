/*JS page for Catch-A-HotRod
	Author: S. Meisha Ray
	Term: VFW1110
	Created: September 30, 2011
*/

//DOM - method when the dom has loaded it will run this function.
window.addEventListener("DOMContentLoaded", function(){
	
	//get element by id function.
		function $(x){
			var theElement = document.getElementbyId(x);
		return theElement;
	}

	//create select field element and populate options.
		function makeCats(){
			var formTag = document.getElementsByTagName("form"),//formTag is an array of all form tags.
				selectLi = $('select'),
				makeSelect = document.createElement('select');
				makeSelect.setAttribute("id", "groups");
			for(var i = 0, j = showList.length; i<j; i++){
				var makeOption = document.createElement('option');
					var optText = showList[i];
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
			updateValue = "No"
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
			var id 			= Math.floor(Math.radom()*10000001);
			//Gather up all of form field varlues and store in an object.
			//Object properties contain an array with the form label and input values.
			getSelectedRadio();
			getCheckedboxValue();
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
	//Default Vars
			var showList = ["--Choose One--", "Chevy", "Corvette", "Camaro", "Ford", "Mopar", "Tuner", "Antique", "Classic", "Low-Riders", "Lifted-Rides"], 
			sexValue;
			updateValue = "No";
			makeCats();
	
	// Set Link & Submit Click 
			var displayLink = $("displayLink");
				displayLink.addEventListener("click", getData);
			var clearLink = $("clear");
				clearLink.addEventListener("click", clearLocal);
			//Save Data function
			var save = $("submit");
				save.addEventListener("click", storeData);

});













