
Ext.define('Adrz.view.Viewport',{

    extend : 'Ext.tab.Panel',

    alias : 'tabpanel',

    activeTabs: 0,

    items: [
        {
            xtype: 'panel',
            closable: false,
            iconCls: 'home',
            title: 'Home'
        }
    ],

    initComponent : function() {

        var me = this;

        me.callParent();
    }
});