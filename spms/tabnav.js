// Utility
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

/**
 * tabs navigation plugin
 */
;(function( $ , window , document , undefined ) { // keep all your code in a Clousure ...

	var pluginName = 'spmsTabs';

	$.fn[pluginName] = function(settings) {

		settings = $.extend({}, $.fn[pluginName].defaultSettings, settings);

		// keep jQuery method chaining ...
		return this.each(function() {

			var plugin = Object.create( Plugin );

			plugin.init(settings, this);
		}); 
	}

	$.fn[pluginName].defaultSettings = {
		opt1		: 'val1',
		opt2		: 'val2',
		opt3		: 'val3'
	};

	var Plugin = {

		init: function(settings, elem) {

			global = this;

			// reference to the plugin object
			this.self = this;

			// selected element
			this.elem = elem;

			// jQuery obj of the selected element 
			this.$elem = $(this.elem);

			this.settings = settings;

			this.tmp();
		}, 

		tmp: function() {

		}
	}
})( jQuery , window , document );





window.onload = function() {

	//var container = document.getElementById('tabcontainer');
	//var tabs = container.querySelectorAll('.tabnav li');
	//var tabs = document.getElementById('tabcontainer').querySelectorAll('.tabnav li');
	//for ( var i = 0 ; i < tabs.length ; i++ ) { tabs[i].onclick = tabClicked; }

	//jsEvent();
}

$(document).ready(function() {
	jQueryEvents();
});

function jsEvent() {

	var elArray = [];
	var all = document.getElementsByTagName("*");
	var regex = new RegExp("(^|\\s)" + 'tabcontent' + "(\\s|$)");

	for ( var i = 0 ; i < all.length ; i++ ) { if ( regex.test(all[i].className ) ) { elArray.push(all[i]); } }

	var ul = document.getElementById('tabul');

	for ( var i = 0 ; i < ul.children.length ; i++ ) { 

		ul.children[i].children[0].onclick = function(e) {
			evento = e;
			e.srcElement.setAttribute('class','active');
			console.log(elArray);
		};
	}
}

function tabClicked(event) {
	event.preventDefault();
	//evento = event;
	var tab = document.getElementById('tabcontainer').querySelector('.tabnav li a.active');
	tab.setAttribute('class','inactive');
	event.srcElement.setAttribute('class','active');
}

function handleDaClick(event) {
	//console.log('clickhandler');
	//alert('click');
}



function jQueryEvents() {

	var anchors = $('.tabnav li a');

	for ( var i = 0 ; i < anchors.length ; i++ ) { 

		$(anchors[i]).click(function(e) {

			e.preventDefault();
			//evento = e;

			var activeLink = $('.tabnav li a.active');
			activeLink.removeClass('active').addClass('inactive');
			$(e.target).removeClass('inactive').addClass('active');

			var indexActiveLink = anchors.index($('.tabnav li a.active'));

			$('.tabcontent.active').removeClass('active').addClass('inactive');
			$($('.tabcontent')[indexActiveLink]).removeClass('inactive').addClass('active');
		});
	}
}
