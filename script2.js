fetch('Data.json')
	.then(
		response => response.json()
			.then(
            	response => response.forEach(
                	item => document.body.appendChild(document.createElement('img')).src = item.url
            	)
			)
	)
	fetch('message.txt')
		.then(
			response => response.text()
			.then( response =>
				document.body.appendChild(document.createElement('p')).innerText = response
			)
		)