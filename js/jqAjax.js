// ... dom is ready 
$(document).ready(function() {

//call();




});


function call(){

	$.ajax({
		url: 'http://localhost:8111/rest/todos',
		type: 'GET',         
		async: true,           
		dataType: "json",         

		// data to be sent to the server
		data: {},

		// request was successful ... 'data' is received from server
		success: function(data, textStatus, jqXHR) {
			console.log(data); 
		},

		// something went wrong ...
		error:          function(jqXHR, textStatus, errorThrown) {      
		        
		},
		    
		// code to run regardless of success or failure
		complete: function(xhr, status) {
		}
	});
}