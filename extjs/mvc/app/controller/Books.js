// http://loianegroner.com/2012/05/extjs-4-mvc-example-xml-grid/
Ext.define('ExtMVC.controller.Books', {

    extend: 'Ext.app.Controller',
 
    stores: ['Books'],
 
    models: ['Book'],
 
    views: ['book.BookGrid'],
 
    init: function() {
 
    }
});