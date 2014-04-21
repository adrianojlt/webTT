var Events = {

	handleClick: function(event) {

		// do something with the event ...
		console.log('event: ', event);
		event.preventDefault();
		event.stopPropagation();

		// call the application logic ...
		Events.doSomeAction(event.x,event.y);
	},

	doSomeAction: function(x,y) {
		console.log('x: ', x, 'y: ', y);
	}
};


  // javascript self execution function
(function() {

	var fireEvent = document.getElementById('fireEvent');

	// add a function event. If you do this again value is overridden ...
	fireEvent.onclick = function(event) {
		console.log('event inside the function added to the event handler of the clicked element');
	};

	// append another function to click event ... Compatibility: this method only works on ie9+ ff and chrome
	fireEvent.addEventListener('click', Events.handleClick);
})();




// execute when DOM is ready
$(document).ready(function() {
	
	eventText = $('#test');
    areaTexto = $('#areaTexto');

    eventText.click(function() {
		console.log('click');
    });

    // ...  another way to create an event handler
    eventText.bind('mouseover', function(event) {

      // global var 
      tmpEvent = event;
      console.log(event);
    });


    areaTexto.bind( 'focus' , function() { console.log('focus'); });

    areaTexto.bind( 'paste' , function(e) { });
});


