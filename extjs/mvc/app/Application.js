
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

    /*
    controls: [
        {
            '#mainmenu button[itemId=startbutton] menuitem': {
                click: this.openModule
            }
        }
    ],
    */

    init: function() {

        var me = this;

        me.control({
            '#mainmenu button[itemId=startbutton] menuitem': {
                click: me.openModule
            }
        });
    },

    // Start application
    launch: function() {
        //Ext.create('Adrz.view.Viewport');
    },

    openModule : function(menuoption) {
        console.log(menuoption);
    }
});
