Ext.define('Adrz.controller.Main', {

    extend: 'Ext.app.Controller',
 
    stores: [],
 
    models: [],
 
    views: [],
 
    init: function() {

        var me = this;

        selfMain = me;

        console.log('Main');

         me.control({
            '#mainmenu button[itemId=startbutton] menuitem': {
                click: me.openModule
            }
        });
    },

    openModule : function(menuoption) {
    console.log('main openmodule');
    }
});