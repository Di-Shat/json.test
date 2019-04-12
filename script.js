let promise = new Promise(
function(resolve,reject){
  const request = new XMLHttpRequest()
request.open('GET','Data.json')

request.onreadystatechange = function(event){
	event.target.readyState === 4 ? 
	event.target.status === 200 ? 
	resolve(event.target.responseText) : 
	reject(event.target.statusText) : null
     }
		request.send()
   }
)
promise.then(
	response => JSON.parse(response).forEach(
			picture => document.body.appendChild(
				document.createElement('img')).src = picture.url
		),
	err => console.log(err)
)