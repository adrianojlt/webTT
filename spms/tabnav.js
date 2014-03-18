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



/**
 * dialog navigation plugin
 */
;(function( $ , window , document , undefined ) { // keep all your code in a Clousure ...

	var pluginName = 'spmsDialog';

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
		type		: 'warning',
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

			//if ( settings.type === 'warning' ) { }

			this.insertDIVs();
			this.tmp();
		}, 

		insertDIVs: function() {
			this.$elem.append('<div class="dialog-fixed-container"> <div class="dialog-header"> Aviso </div> <div class="dialog-content"> <div class="dialog-image"> </div> <div class="dialog-message" style="font-weight: bold;"> Content </div> <div class="dialog-message"> Content </div> </div> <div class="dialog-footer"> </div> </div> </div>');
		},

		warning: function() {},
		confirm: function() {},
		error: function() {},


		tmp: function() {

		}
	}
})( jQuery , window , document );


;(function($) { // wrap it in a closure ...

	(function() { /*console.log('constructor');*/ })();

	var init = function() {

		$body = $(document.body);
		$window = $(window);

		var base =  '<div class="dialog-overlay"></div>' +
					'<div id="spmsDialog" class="dialog-fixed-container">' +
        				'<div class="dialog-header">' +
          					'<span></span>' +
          					'<img src="img/closeWhite.png" />' +
        				'</div>' + 
        				'<div class="dialog-content">' +
          					'<div class="dialog-message" style="font-weight: bold;"> </div>' +
        				'</div>' +
        				'<div class="dialog-footer"> </div>' +
      				'</div>';

		$.spmsDialog.dialog = $(base).appendTo($body); 

		$.spmsDialog.dialog.on('keydown', keyDownEventHandler);

		$.spmsDialog.dialog.find('.dialog-header img').on('click', function() {
			$.spmsDialog.close();
		});
	};

	var keyDownEventHandler = function() {
		
		var key = (window.event) ? event.keyCode : e.keyCode;

		//escape key closes
		if(key === 27) {
			console.log('event');
			//fadeClicked();	
		}
	};

	var sampleFunction = function() {
		console.log('sample function here ...');
	};

	var addCloseButton = function(label) {
		var footer = $.spmsDialog.dialog.find('.dialog-footer');
		var buttons = '<input class="spms-button right cancel" type="button" style="*height: 30px; *width: 100px; " value="' + label + '">';
		$(buttons).appendTo($(footer));
		$.spmsDialog.dialog.find('.dialog-footer .cancel').on('click', function(event) {
			event.preventDefault();
			$.spmsDialog.close();
		});
	};

	var addOkButton = function(label, arg) {
		var footer = $.spmsDialog.dialog.find('.dialog-footer');
		var buttons = '<input class="spms-button right ok" type="button" style="*height: 30px;" value="' + label + '">';
		$(buttons).appendTo($(footer));
		$.spmsDialog.dialog.find('.dialog-footer .ok').on('click', function(event) {
			event.preventDefault();
			$.spmsDialog.close();
			arg.callback();
		});
	};

	var methods = {

		confirm: function(arg) {

			addCloseButton('CANCELAR');
			addOkButton('OK', arg);

			$.spmsDialog.dialog.find('.dialog-header span').text(arg.title);

			$.spmsDialog.dialog.find('.dialog-content').prepend('<img src="img/question.png" />');

			$.spmsDialog.dialog.find('.dialog-message').text(arg.message);
		},

		error: function(arg) {

			addCloseButton('FECHAR');

			$.spmsDialog.dialog.find('.dialog-header span').text(arg.title);

			$.spmsDialog.dialog.find('.dialog-content').prepend('<img src="img/delete.png" />');

			$.spmsDialog.dialog.find('.dialog-message').text(arg.message);
		},

		warning: function(arg) {

			addCloseButton('OK');

			$.spmsDialog.dialog.find('.dialog-header span').text(arg.title);

			$.spmsDialog.dialog.find('.dialog-content').prepend('<img src="img/warning.png" />');

			$.spmsDialog.dialog.find('.dialog-message').text(arg.message);
		},

		tmp: function(arg) {
			//console.log(arg);
		}
	};

	$.spmsDialog = function( method ) {

		// ... a dialog already in use ... 
		if ( $.spmsDialog.dialog ) return;

		if ( methods[method] ) {
			init();
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    	} else if ( typeof method === 'object' || ! method ) {
			init();
      		return methods.tmp.apply( this, arguments );
    	} else {
      		$.error( 'Method ' +  method + ' does not exist on jQuery.spmsDialog' );
		}
	};

	$.spmsDialog.close = function() {
		if ( $.spmsDialog.dialog ) {
			$.spmsDialog.dialog.fadeOut('fast', function() {
				if ( $.spmsDialog.dialog ) $.spmsDialog.dialog.remove();
				$.spmsDialog.dialog = null;
			});
		}
	}

	/**
	* Enable using $('.selector').spmsDialog({});
	* This will grab the html within the prompt as the prompt message
	*/
	$.fn.spmsDialog = function(options) {
		$.spmsDialog($(this).clone().html(),options);
	}

})(jQuery);



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
