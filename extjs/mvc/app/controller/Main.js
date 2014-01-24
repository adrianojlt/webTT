Ext.define('Adrz.controller.Main', {

    extend: 'Ext.app.Controller',
 
    stores: [],
 
    models: [],

    requires: [
        'Adrz.view.MainPanel'
    ],
 
    views: [
        'MainPanel'
    ],

    refs: [
        {
            selector: '#maintabs',
            ref: 'maintabs'
        }
    ],
 
    init: function() {

        var me = this;

        selfMain = me;

         me.control({
            '#mainmenu button[itemId=startbutton] menuitem': {
                click: me.openModule
            }
        });
    },

    openModule : function(menuoption) {

        var me = this;

        controller = me.application.controllers.get(menuoption.controller);

        //maintabs = Ext.ComponentQuery.query('#maintabs')[0];
        maintabs = this.getMaintabs();

        //maintabs.add

        console.log('main openmodule');
    }
});