function onLoad() {
	var p = document.getElementById("main");
	console.log(p);
	

		$.getJSON('https://ghoapi.azureedge.net/api', function(data) {
        
        // var text = `Date: ${data.date}<br>
        //             Time: ${data.time}<br>
        //             Unix time: ${data.milliseconds_since_epoch}`
                    
        	console.log(data);
        	// $("#main").html(text);
   	 	});

   	 	// setTimeout(onLoad,1000);

	// var requestURL = "http://indiacoviddata.herokuapp.com/states";
	// var request = new XMLHttpRequest();
	// request.open('GET',requestURL);
	// // request.responseType = '';
	// request.send();
	// request.onload = function(){
	// 	const data = request.response;
	// 	console.log(data);
	// 	console.log("Hello");
	// }

}