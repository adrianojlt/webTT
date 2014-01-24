Ext.define('Adrz.view.MainPanel',{

    extend : 'Ext.tab.Panel',

    alias : 'widget.mainpanel',
   
    activeTabs: 0,

    items: [
        {
            xtype: 'panel',
            closable: true,
            iconCls: 'home-icon16',
            title: 'Home'
        },
        {
            xtype: 'amostras',
            closable: true,
            iconCls: '',
            title: 'Amostras'
        }
    ],

    initComponent : function() {

        var me = this;

        me.callParent();
    }
});