
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
        //'Amostras',
        //'Artigos'
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

        var me = this;

        console.log(menuoption);
        menuOpt = menuoption;

        self = me;

        maintabs = Ext.ComponentQuery.query('#maintabs')[0];

        //controller = me.application.controllers.get(menuoption.controller);


        return;

        if (!controller) {

            controller = Ext.create(menuoption.controller, {
                id : menuoption.controller,
                application : me.application
            });
        }
        else {

        }
        //Ext.require(menuoption.controller , function() {console.log(menuoption.controller); });
    }
});
