Ext.define('Adrz.view.MainPanel',{

    extend : 'Ext.tab.Panel',

    alias : 'widget.mainpanel',
   
    activeTab: 1,

    margins: 5,

    items: [

        {xtype: 'home', closable: false, iconCls: 'home-icon16', title: 'Home'},
        {xtype: 'artigos', closable: true, iconCls: '', title: 'Artigos'},
        {xtype: 'amostras', closable: true, iconCls: '', title: 'Amostras'}
    ],

    initComponent : function() {

        var me = this;

        me.callParent();
    }
});