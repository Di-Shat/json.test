function loadData(url){
 return new Promise(
    function(resolve,reject){
      const request = new XMLHttpRequest()
      request.open('GET','Data.json')

    request.onreadystatechange = function(event){
	  event.target.readyState === 4 ? 
	    event.target.status === 200 ? 
	      reject(event.target.statusText) : null
    }
		request.send()
   }
 )
}
loadData('Data.json').then(
	response => JSON.parse(response).forEach(
			picture => document.body.appendChild(
				document.createElement('img')).src = picture.url
		),
	err => console.log(err)
)
loadData('message.txt').then(
	response => document.body.appendChild(
				document.createElement('p')).innerText = response
	)
loadData('index.html').then(
	response => document.body.appendChild(
	       document.createElement('pre')).innerText = response
	)
	