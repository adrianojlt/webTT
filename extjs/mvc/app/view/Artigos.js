Ext.define('Adrz.view.Artigos', {

    //extend: 'Ext.panel.Panel',
    extend: 'Ext.container.Container',

    alias: 'widget.artigos',

    layout: 'border',

    //width: '100%',
    //height: '100%',

    requires: [
        //'Ext.ux.RowExpander'
    ],

    items: [
        {
            region: 'north',
            layout: 'hbox',
            //width: '100%',
            //height: 200,
            //margins: 5,
            border: false,
            items: [
                {
                    //columnWidth: .5,
                    border: false,
                    html: 'Panel one content'
                },
                {
                    //columnWidth: .2,
                    html: 'Panel two content'
                },
                {
                    //columnWidth: .3,
                    html: 'Panel tree content'
                }
            ]
        },
        {
            region: 'center',
            html: 'center content',
            border: false
        }
    ]

    /*
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            border: true,
            width: '33%',
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    border: true,
                    width: '100%',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'ref',
                            //labelAlign: 'top',
                            width: '50%'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Descritivo',
                            //labelAlign: 'top',
                            margin: '0 10 0 0',
                            width: '100%'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    width: '100%',
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Tipo',
                            labelAlign: 'top', 
                            width: '100%'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'textfield',
            fieldLabel: 'teste',
            labelAlign: 'top',
            width: '10%',
            margin: '0 20 10 10',
            //afterLabelTextTpl: required,
            allowBlank: true        
        }
    ]
    */
});