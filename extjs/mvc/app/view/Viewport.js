Ext.define('Adrz.view.Viewport',{

    extend : 'Ext.container.Viewport',

    alias : 'viewport',

    layout : 'border',  

    initComponent : function() {

        var me = this;

        me.items = [
            {
                xtype : 'panel',
                width: 185,
                margin: '5 5 5 0',
                collapsible: true,
                region: 'east',
                animate: false,
                defaults: {},
                layout: {
                    type: 'accordion',
                    //titleCollapse: true,
                    collapsed: true,
                    pack: 'start'
                },
                multi: true,
                collapsible: true,
                iconCls: '',
                title: 'Menu',
                menu : [
                    {
                        xtype: 'menuitem',
                        text:'tmp',
                        alias: 'amostras',
                        iconCls:'clients-icon16'
                    }
                ]
            },
            {
                xtype : 'panel',
                margins: 5,
                layout: 'fit',
                region : 'center',

                items: [
                    {
                        xtype: 'mainpanel',
                    }
                ],

                dockedItems : [
                    {
                        xtype : 'toolbar',
                        docked: 'top',
                        itemId: 'mainmenu',
                        items : [
                            {
                                xtype: 'button', // default for toolbars ...
                                text : 'Iniciar',
                                scale: 'small',
                                //style: 'margin-left: 4px;',
                                //border: 1,
                                iconCls : 'home-icon16',
                                itemId : 'startbutton',
                                menu : [
                                    {
                                        xtype: 'menuitem',
                                        text:'Amostras',
                                        alias: 'amostras',
                                        iconCls:'clients-icon16',
                                        controller: 'Amostras'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text:'Artigos',
                                        alias: 'artigos',
                                        iconCls:'invoices-icon16',
                                        controller: 'Artigos'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text:'Grelha',
                                        alias: 'grid',
                                        iconCls:'categories-icon16',
                                        controller: 'Grid'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text:'Layouts',
                                        iconCls:'categories-icon16'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text:'Toolbars',
                                        iconCls:'categories-icon16'
                                    }
                                ]
                            },
                            {
                                xtype: 'label',
                                html: '<span style="font-size:12px;"> SoftGI </span>'
                            },
                            {
                                xtype: 'tbfill'
                            },
                            {
                                xtype: 'button',
                                text : 'admin',
                                icon : 'resources/images/user_suit.png',
                                menu: [
                                    {
                                        xtype: 'menuitem',
                                        text: 'settings',
                                        iconCls:''
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text: 'logout',
                                        iconCls:''
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 30,
                margin: '0 5 5 5',
                region: 'south',
                html: '<div id="titleHeader"><center><span style="font-size:10px;">WebGi prototype - www.softideia.com </span></center></div>'
            }
        ];

        me.callParent();
    }
});
