
Ext.define('Adrz.view.Viewport',{

    extend : 'Ext.container.Viewport',

    alias : 'viewport',

    layout : 'border',  // fit

    initComponent : function() {

        var me = this;

        me.items = [
            {
                xtype : 'panel',
                region: 'north',
                height: 30
            },
            {
                xtype : 'panel',
                width: 185,
                collapsible: true,
                region: 'east',
                animate: false,
                defaults: {
                    //collapsed: true
                },
                layout: {
                    type: 'accordion',
                    //titleCollapse: true,
                    collapsed: true,
                    pack: 'start'
                },
                multi: true,
                collapsible: true,
                //hideCollapseTool: true,
                iconCls: '',
                title: 'Menu'
            },
            {
                xtype : 'panel',
                layout : 'card',
                region : 'center',
                items : [
                    {
                        xtype : 'amostras'
                        //xtype : 'artigos'
                        //xtype : 'tabpanel'
                    }
                    /*
                    {
                        xtype: 'tabpanel',
                        itemId: 'maintabs',
                        border: false,
                        hidden: true
                    }
                    */
                ],

                dockedItems : [
                    {
                        xtype : 'toolbar',
                        docked: 'top',
                        itemId: 'mainmenu',
                        items : [
                            {
                                text : 'Iniciar',
                                iconCls : 'home-icon16',
                                itemId : 'startbutton',
                                menu : [
                                    {
                                        text:'amostras',
                                        iconCls:'clients-icon16',
                                        controller: 'Adrz.controller.Amostras'
                                    },
                                    {
                                        text:'artigos',
                                        iconCls:'invoices-icon16'
                                    },
                                    {
                                        text:'stocks',
                                        iconCls:'categories-icon16'
                                    }
                                ]
                            },
                            {
                                xtype: 'tbfill'
                            },
                            {
                                //text : 'John Doe'
                                //icon : 'resources/images/user_suit.png'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                region: 'south',
                height: 30,
                style: 'border-top: 1px solid #4c72a4;',
                html: '<div id="titleHeader"><center><span style="font-size:10px;">Mastering ExtJS book - Loiane Groner - http://packtpub.com</span></center></div>'
            }
        ];

        me.callParent();
    }
});