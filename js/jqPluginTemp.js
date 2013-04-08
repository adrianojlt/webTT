// Utility
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

// keep all your code in a Clousure ...
(function( $ ) {

	// unique name for the plugin
	$.fn.pluginName = function(settings) {

		// maintain jquery method chaining
		return this.each(function(){

			// Code goes here ...
			var pluginName = Object.create( PluginName );
			pluginName.init(settings, this);
		});
	}

	// Provide Default Settings in a variavel that can itself be modified before intallation.
	// This way its possible to change the settings as a whole rather than having to pass modified
	// values each time we instantiate our plugin.
	$.fn.pluginName.defaultSettings = {
		opt1		: 'val1',
		opt2		: 'val2',
		opt3		: 'val3'
	};

	var PluginName = {
		init: function(settings, elem) {

			var self = this;
			self.elem = elem;
			self.$elem = $(elem);

			if ( typeof settings === 'string') {}
			else { } // ... object was passed 

			// ... merge settings
			self.settings = $.extend({}, $.fn.pluginName.defaultSettings, settings);

			//$(this).hide();
			//$(elem).show();

			tmpElem = $(elem);

			$(elem).children('li').each(function(index) {
				//console.log($(this));
				//$(this).children('ul').hide();
			});

			console.log("this: ", this);
			console.log("$(elem): ", $(elem));
			console.log("elem: ", elem);

		},

		tmp: function( arg ) {
			
		}
	}
})( jQuery );