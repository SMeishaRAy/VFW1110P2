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
		functions makeCats(){
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
	
	function storeData(){
			var id 			= Math.floor(Math.radom()*10000001);
			//Gather up all of form field varlues and store in an object.
			//Object properties contain an array with the form label and input values.
			getSelectedRadio();
			getCheckedboxValue();
			var item		= {};
				item.group 	= ["Group:", $('groups').value];
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

	//Default Vars
	var showList = ["--Choose One--", "Chevy", "Corvette", "Camaro", "Ford", "Mopar", "Tuner", "Antique", "Classic", "Low-Riders", "Lifted-Rides"], 
		sexValue;
		updateValue = "No"
	;
	makeCats();
	
	// Set Link & Submit Click 
		/*var displayLink = $("displayLink");
			displayLink.addEventListener("click", getData);
		var clearLink = $("clear");
			clearLink.addEventListener("click", clearLocal);*/
		//Save Data function
		var save = $("submit");
			save.addEventListener("click", storeData);

});













