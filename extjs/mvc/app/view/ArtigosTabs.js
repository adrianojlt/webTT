Ext.define('Adrz.view.ArtigosTabs',{

    extend : 'Ext.tab.Panel',

    alias : 'widget.artigostabs',
   
    activeTab: 0,

    margins: 5,

    items: [
        {
            title: 'Geral',
            xtype: 'panel',
            closable: false,
            //iconCls: 'home-icon16',
            items: [
                {

                }
            ]
        },
        {
            title: 'Stocks',
            xtype: 'panel',
            closable: false,
            iconCls: ''
        },
        { title: 'Fornecedores' , xtype: 'panel' , closable: false , iconCls: '' },
        { title: 'Imagem' , xtype: 'panel' , closable: false , iconCls: '' },
        { title: 'Outros' , xtype: 'panel' , closable: false , iconCls: '' },
        { title: 'Contabilidade' , xtype: 'panel' , closable: false , iconCls: '' }
    ],

    initComponent : function() {
        var me = this;
        me.callParent();
    }
});