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
		functions makeShows(){
			var formTag = document.getElementsByTagName("form"),//formTag is an array of all form tags.
				selectLi = $("shows"),
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

	function storeData(){
		var id 		= Math.floor(Math.radom()*10000001);
			//gather up all of form field varlues and store in an object.
			//object properties contain array with the form label and input values.
			var item		= {};
				item.group 	= ["Group:", $('groups').value];
				item.fname  = ["First Name:", $('fname').value];
				item.lname  = ["Last Name:", $('lname').value];
				item.email  = ["Email:", $('email').value];
				item.sex	= ["Sex:", $('sex').value];
				
}

	//array
	var showList = ["--Choose One--", "Chevy", "Corvette", "Camaro", "Ford", "Mopar", "Tuner", "Antique", "Classic", "Low-Riders", "Lifted-Rides"];
	makeShows();
	
	// Set Link & Submit Click 
		/*var displayLink = $("displayLink");
			displayLink.addEventListener("click", getData);
		var clearLink = $("clear");
			clearLink.addEventListener("click", clearLocal);*/
		//Save Data function
		var save = $("submit");
			save.addEventListener("click", storeData);

});













