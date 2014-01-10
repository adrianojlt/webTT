
Ext.define('Adrz.view.Viewport',{

    extend : 'Ext.container.Viewport',

    alias : 'viewport',

    layout : 'fit',

    initComponent : function() {

        var me = this;

        me.items = [
            {
                xtype : 'panel',
                dockedItems : [
                    {
                        xtype : 'toolbar',
                        docked: 'top',
                        itemId: 'mainmenu',
                        items : [
                            {
                                text : 'Start',
                                iconCls : 'home-icon16',
                                itemId : 'startbutton',
                                menu : [
                                    {
                                        text:'Clients',
                                        //iconCls:'clients-icon16'
                                    },
                                    {
                                        text:'Invoices',
                                        iconCls:'invoices-icon16'
                                    },
                                    {
                                        text:'Categories',
                                        iconCls:'categories-icon16'
                                    }
                                ]
                            },
                            {
                                xtype: 'tbfill'
                            },
                            {
                                text : 'John Doe'
                                //icon : 'resources/images/user_suit.png'
                            }
                        ]
                    }
                ]
            }
        ];

        me.callParent();
    }
});