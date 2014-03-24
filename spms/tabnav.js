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

		$.spmsDialog.dialog.on('keydown', function() {console.log('keydown');});

		$.spmsDialog.dialog.find('.dialog-header img').on('click', function() {
			$.spmsDialog.close();
		});

		return $.spmsDialog.dialog;
	};

	var keyDownEventHandler = function() {

		console.log('keyDownEventHandler');
		
		var key = (window.event) ? event.keyCode : e.keyCode;

		//escape key closes
		if(key === 27) {
			console.log('event');
			//fadeClicked();	
		}
	};


	var addCloseButton = function(label, callback) {


		var footer = $.spmsDialog.dialog.find('.dialog-footer');
		var buttons = '<input class="spms-button right cancel" type="button" value="' + label + '">';
		$(buttons).appendTo($(footer));

		var cancelButton = $.spmsDialog.dialog.find('.dialog-footer .cancel');

		cancelButton.css(
			{
				'*height': '30px',
				'*width': '200px'
			}
		);

		cancelButton.on('click', function(event) {
			//console.log(arg);
			event.preventDefault();
			$.spmsDialog.close();
			if ( callback ) {
				//console.log(callback);
				callback();
			}
		});
	};

	var addOkButton = function(label, callback) {
		var footer = $.spmsDialog.dialog.find('.dialog-footer');
		var buttons = '<input class="spms-button right ok" type="button" style="*height: 30px;" value="' + label + '">';
		$(buttons).appendTo($(footer));
		$.spmsDialog.dialog.find('.dialog-footer .ok').on('click', function(event) {
			event.preventDefault();
			$.spmsDialog.close();
			callback();
		});
	};

	var methods = {

		confirm: function(arg) {

			addCloseButton('CANCELAR', null);
			addOkButton('OK', arg.callback);

			$.spmsDialog.dialog.find('.dialog-header span').text(arg.title);

			$.spmsDialog.dialog.find('.dialog-content').prepend('<img src="img/question.png" />');

			$.spmsDialog.dialog.find('.dialog-message').text(arg.message);
		},

		error: function(arg) {

			addCloseButton('FECHAR', arg.callback);

			$.spmsDialog.dialog.find('.dialog-header span').text(arg.title);

			$.spmsDialog.dialog.find('.dialog-content').prepend('<img src="img/delete.png" />');

			$.spmsDialog.dialog.find('.dialog-message').text(arg.message);
		},

		warning: function(arg) {

			addCloseButton('OK', arg.callback);

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

window.onload = function() { }

$(document).ready(function() {
	tabEvents();
});


function resetStyles(node) {

	var properties = window.getComputedStyle(node,null);

	for ( var i = 0 ; i < properties.length ; i++ ) { 
		//console.log(props[i]); 
		node.style[properties[i]] = 'initial';
	}
}

function tabEvents() {

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
