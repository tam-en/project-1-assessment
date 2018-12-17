document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded");

    // SET THE INITIAL INPUT AND COUNT VALUES
    let inputValue = 1;
    let count = 0;

    // GRAB THE INPUT VALUE FROM USER (default is 1)
    let getInputValue = function() {
	  inputValue = document.getElementById("myNumber").value;
	};

	// DISPLAY NUMBERS LESS THAN ZERO AS RED, otherwise BLACK
	let colorTest = function() {
		if (count < 0) {
			document.getElementById("count").style.color = "#ff0000";
		} else {
			document.getElementById("count").style.color = "#000000";
		};
	};

	// WHAT HAPPENS WHEN "+" BUTTON IS PRESSED
	let upCount = function() {
		getInputValue();
		inputValue = parseInt(inputValue);
		count = parseInt(count);
		count = count + inputValue;
		document.getElementById("count").textContent = count;
		colorTest();
	};

	// WHAT HAPPENS WHEN "-" BUTTON IS PRESSED
	let downCount = function() {
		getInputValue();
		inputValue = parseInt(inputValue);
		count = parseInt(count);
		count = count - inputValue;
		document.getElementById("count").textContent = count;
		colorTest();
	};

	// LISTENERS FOR "+" AND "-" BUTTONS TRIGGER APPROPRIATE FUNCTIONS
	document.getElementById("plusBtn").addEventListener('click', upCount);
	document.getElementById("minusBtn").addEventListener('click', downCount);
});

