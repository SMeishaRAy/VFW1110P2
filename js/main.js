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

	var showList = [" --Choose a Show--", "", "Chevy", "Corvette", "Camaro", "Ford", "Mopar", "Tuner", "Antique", "Classic", "Low-Riders", "Lifted-Rides"];
	
	// Set Link & Submit Click 
		var displayLink = $("displayLink");
			displayLink.addEventLister("click", getData);
		var clearLink = $("clear");
			clearLink.addEventLister("click", clearLocal);
		var save = $("submit");
			save.addEventLister("click", storeData);
//Need Save Data function

//Need Save a Key(randomNumber) for values (array or object). Each saved entry will be a key:value pair.

//The Key should be a random number wich will create a unique id.

//The value should be an array or object that cantains the values of your form field data.

//This allows for you to save multiple submissions from you form into local storage without overwriting dada.

//Use web inspector to test local data storage.

//JS: Get data 
//JS: Array Function - write an array function(s) that populate atleast one select form element.  (dropdown menu).

});