Ext.define('Adrz.controller.Main', {

    extend: 'Ext.app.Controller',
 
    stores: [],
 
    models: [],

    requires: [
    ],
 
    views: [
        'MainPanel'
    ],

    refs: [
        {
            selector: 'viewport toolbar',
            ref: 'mainmenus'
        },
        {
            selector: 'viewport',
            ref: 'viewport'
        },
        {
            selector: 'mainpanel',
            ref: 'mainpanel'
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

        var mainPanel = this.getMainpanel(); 

        // all controllers are loaded when the app starts ...
        // we need to create the controller manually if the ones are not loaded at app startup ...
        var controller = me.application.controllers.get(menuoption.controller);

        optMenu = menuoption;

        // load the tab from the tabpanel ...
        var newTab = mainPanel.items.findBy(function (tab) {
            return tab.title === menuoption.text;
        });

        // no tab found??? create it ....
        if ( !newTab ) { 

            newTab = mainPanel.add({
                xtype: menuoption.alias,
                title: menuoption.text,
                iconCls: menuoption.iconCls,
                closable: true
            });
        }

        mainPanel.setActiveTab(newTab);
    }
});