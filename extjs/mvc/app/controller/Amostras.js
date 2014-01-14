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
            ref: 'search',
            selector: 'amostraspesquisa #searchButton'
        }
    ],
 
    init: function() {

        var self = this;

        //console.log();
        //Ext.widget('viewport');
        //Ext.create('Adrz.view.Viewport');
    }
});