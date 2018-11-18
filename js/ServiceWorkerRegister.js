if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./js/serviceWorker.js')
	.then(function() {
		console.log('Registration Worked.');
	})
	.catch(function() {
		console.log('Registration Failed.');
	});
}