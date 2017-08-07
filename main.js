//univeral variable

var origNumberEntered = document.getElementById("originalTemp");

//what was entered in the text area//

// var whichChecked = celOrFahrChecked

var element = document.getElementById("submitButton");
element.addEventListener("click", tempInput);

function tempInput() {
	var inputText = parseInt(origNumberEntered.value);

	if (document.getElementById("fahr").checked) {
		var gatherInput = fahrenheit(inputText);
		domWriter(gatherInput, "f");
	}
	else if (document.getElementById("celButton").checked) {
		// var inputText = gatherInput;
		var gatherInput = celsius(inputText);
		domWriter(gatherInput, "c");
	}
	else {
		"You need to choose a conversion";
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
			console.log(gatherInput);
		}
		else if (gatherInput <32) {
			colorHolder = "low";
			console.log(colorHolder);
			console.log(gatherInput);
		}
		else {
			colorHolder = "middle";
			console.log(colorHolder);
			console.log(gatherInput);
		}
	} 
	else {
		if (gatherInput > 32) {
			colorHolder = "high";
			console.log(colorHolder);
			console.log(gatherInput)
		}
		else if (gatherInput < 0) {
			colorHolder = "low";
			console.log(colorHolder);
			console.log(gatherInput);
		}
		else {
			colorHolder = "middle";
			console.log(colorHolder);
			console.log(gatherInput);
		}
	}
	
	var tempDisplay = document.getElementById("tempDisplay");
	tempDisplay.innerHTML = '<p>The converted temperature is ' + gatherInput + '</p>';
	tempDisplay.className = colorHolder;
}

			// return domStringtoDom;
			// document.write(domString);
			// console.log(tempContainerColor);


// 	} 	else if (colorHolder === "middle") {
// 			tempContainerColor.innerHTML += domString;
// 			domString +='<div id="poopOutput">';
// 			domString += '<p id="colorGreen">' + 'The converted temperature is ' + colorHolder + '</p>';
// 			domString += '</div>'
// 			return tempContainerColor;
// 			console.log(tempContainerColor);
// 		} else {
// 			tempContainerColor.innerHTML += domString;
// 			domString +='<div id="poopOutput">';
// 			domString += '<p id="colorBlue">' + 'The converted temperature is ' + colorHolder + '</p>';
// 			domString += '</div>'
// 			return tempContainerColor;
// 			console.log(tempContainerColor);
		

		
	
	
		
		






