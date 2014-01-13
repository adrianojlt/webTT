
Ext.define('Adrz.Application', {

    name: 'Adrz',

    extend: 'Ext.app.Application',

    requires: [
        
    ],

    views: [
        //'Adrz.view.Viewport',
        //'Adrz.view.AmostrasGrid'
        //'Adrz.view.Amostras'
    ],

    stores: [
    ],

    controllers: [
        'Amostras'
    ],

    refs: [

    ],

    //splashscreen: {},

    init: function() {
        Ext.create('Adrz.view.Viewport');

    },

    launch: function() {

    }
});
