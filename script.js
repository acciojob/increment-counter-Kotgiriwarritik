//your JS code here. If required.


	const counterElement = docoment.getElementById('counter');
	let score = 0;

    function incrementCounter() {
    	   alert(`Current Counter Value: ${score}`);

		score++;
		counterElement.textContent = score;
    }
