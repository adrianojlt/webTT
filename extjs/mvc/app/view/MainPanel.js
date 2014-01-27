Ext.define('Adrz.view.MainPanel',{

    extend : 'Ext.tab.Panel',

    alias : 'widget.mainpanel',
   
    activeTab: 1,

    margins: 0,

    items: [

        {
            xtype: 'panel',
            closable: false,
            iconCls: 'home-icon16',
            title: 'Home'
        },
        {
            xtype: 'artigos',
            closable: true,
            iconCls: '',
            title: 'Artigos'
        }
    ],

    initComponent : function() {

        var me = this;

        me.callParent();
    }
});