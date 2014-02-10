Ext.define('Adrz.view.ArtigosTabs',{

    extend : 'Ext.tab.Panel',

    alias : 'widget.artigostabs',
   
    activeTab: 0,

    margins: 5,

    items: [
        {
            title: 'Geral',
            xtype: 'form',
            closable: false,
            margins: 5,
            defaultType: 'textfield',
            layout: 'auto',
            //iconCls: 'home-icon16',
            items: [
                {fieldLabel  : 'Name', margin: '5 5 5 5', name: 'name'},
                {fieldLabel  : 'Contact', margin: '5 5 5 5', name        : 'contact'},
                {xtype       : 'textarea', margin: '5 5 5 5', fieldLabel  : 'Address', name        : 'address'},
                {fieldLabel  : 'Phone', margin: '5 5 5 5', name        : 'phone'}
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        {
                            text: 'New',
                            iconCls: 'pageadd-icon16'
                        },
                        {
                            text: 'Save',
                            iconCls: 'save-icon16'
                        },
                        {
                            text: 'Delete',
                            iconCls: 'delete-icon16'
                        },
                    ]
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