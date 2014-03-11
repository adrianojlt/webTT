// Utility
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

// keep all your code in a Clousure ...
;(function( $ , window , document , undefined ) {

	var pluginName = 'pluginTemplate';

	// unique name for the plugin
	$.fn.[pluginName] = function(settings) {

		// ... merge settings
		settings = $.extend({}, $.fn[pluginName].defaultSettings, settings);

		// maintain jquery method chaining ...
		return this.each(function(){

			// Code goes here ...
			var plugin = Object.create( Plugin );
			plugin.init(settings, this);
		});
	}

	// Provide Default Settings in a variavel that can itself be modified before intallation.
	// This way its possible to change the settings as a whole rather than having to pass modified
	// values each time we instantiate our plugin.
	$.fn.plugin.defaultSettings = {
		opt1		: 'val1',
		opt2		: 'val2',
		opt3		: 'val3'
	};

	var Plugin = {

		init: function(settings, elem) {

			// reference to the plugin object
			this.self = this;

			// selected element
			this.elem = elem;

			// jQuery obj of the selected element 
			this.$elem = $(this.elem);

			this.settings = settings;

			this.tmp();
		},

		tmp: function( arg ) {
			
		}
	}
})( jQuery , window , document );