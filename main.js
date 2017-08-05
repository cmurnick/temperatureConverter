//univeral variable

var origNumberEntered = document.getElementById("originalTemp");

//what was entered in the text area//

// var whichChecked = celOrFahrChecked

var element = document.getElementById("submitButton");
element.addEventListener("click", tempInput );



function tempInput() {
	var inputText = parseInt(origNumberEntered.value);
	
	// console.log("origNumberEntered:", inputText);
	

	if (document.getElementById("fahr").checked) {
	var gatherInput = fahrenheit(inputText);
	domWriter(gatherInput, "f");
	}
	
	 else if (document.getElementById("celButton").checked) {
		// var inputText = gatherInput;
		var gatherInput = celsius(inputText);
		domWriter(gatherInput, "c");
	} else {
		"This is shit";
	}


	}

function fahrenheit(farTemp) {
	var ftemp = (farTemp * 1.8 ) + 32;
	return ftemp;	
}

function celsius(celTemp) {
	var cel = (celTemp - 32) / 1.8;	
	return cel;
}


function domWriter(gatherInput, t) {
	var colorHolder;
	if (t === "f") {
		if (gatherInput > 90) {
				colorHolder = "high";
				console.log(colorHolder);
				console.log(gatherInput)
		} else if (gatherInput <32) {
				colorHolder = "low";
				console.log(colorHolder);
				console.log(gatherInput);
		} else {
				colorHolder = "middle";
				console.log(colorHolder);
				console.log(gatherInput);
		}
	} else {
		if (t === "c") {
			if (gatherInput > 32) {
				colorHolder = "high";
				console.log(colorHolder);
				console.log(gatherInput)
		} else if (gatherInput < 0) {
				colorHolder = "low";
				console.log(colorHolder);
				console.log(gatherInput);
		} else {
				colorHolder = "middle";
				console.log(colorHolder);
				console.log(gatherInput);
		}
		}
		var domString = "";
		var tempContainerColor = document.getElementById("poopOutput");
		tempContainerColor.InnerHTML;
		
		
		}






