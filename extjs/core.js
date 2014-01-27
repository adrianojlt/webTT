Ext.onReady(function () {

	create();
	tmp();
});

function tmp() {

	 book = new Adrz.main.Book();
}

function create() {

	Ext.define('Adrz.main.Book', {

		constructor: function() {
			console.log('book created');
		}
	});

}

