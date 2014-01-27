
Ext.application({

	// define the namespace ...
    name: 'Adrz',

    appFolder: 'app',

    //extend: 'Adrz.Application',

	// load controllers here ... 
	// define as many controllers as required in the array and ...
	// all of them will be loaded and executed in the order we have declared them.	
    controllers: [
        'Main',
        'Amostras',
        'Artigos'
    ],

    autoCreateViewport: true,

    launch: function() {
        
    }
});
