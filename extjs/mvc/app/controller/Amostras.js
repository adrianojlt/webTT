Ext.define('Adrz.controller.Amostras', {

    extend: 'Ext.app.Controller',
 
    stores: [

    ],
 
    models: [

    ],
 
    views: [
        'Amostras',
        'AmostrasGrid',
        'AmostrasPesquisa'
    	//'Viewport'
        //'Adrz.view.Viewport'
    ],

    refs: [
        {
            selector: 'amostraspesquisa #searchButton',
            ref: 'search'
        }
    ],
 
    init: function() {

        var self = this;

        console.log('Amostras');
        //Ext.widget('viewport');
        //Ext.create('Adrz.view.Viewport');
    }
});