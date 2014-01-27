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
    }
});