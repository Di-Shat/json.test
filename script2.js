fetch('data.json')
	.then(
		response => response.json()
			.then(
				response => response.forEach(
					item => localStorage.setItem('json',JSON.stringify(item))
				)
			)
	)
fetch('message.txt')
	.then(
		response => response.text()
			.then( response => 
				document.cookie = `message=${response}`
			)
	)
document.body.appendChild(document.createElement('p')).innerText = document.cookie
window.addEventListener( 'storage', function(e) {  
    console.log( 'localStorage was changed from outside' )
})
	