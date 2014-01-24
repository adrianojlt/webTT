Ext.define('Adrz.Application', {

    name: 'Adrz',

    extend: 'Ext.app.Application',

    requires: [
        'Adrz.controller.Amostras'
    ],

    views: [
    ],

    stores: [
    ],

    // let the framework load and initialize our controllers
    controllers: [
        'Amostras',
        'Artigos'
    ],

    refs: [

    ],

    init: function() {

    },

    launch: function() {

    },

    openModule : function(menuoption) {

    }
});
