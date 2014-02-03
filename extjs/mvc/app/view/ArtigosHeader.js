Ext.define('Adrz.view.ArtigosHeader', {

    //extend: 'Ext.container.Container',
    extend: 'Ext.panel.Panel',

    alias: 'widget.artigosheader',

    layout: 'hbox',

    requires: [],

    items: [
        {
            xtype: 'panel',
            width: '40%',
            layout: 'vbox',
            border: false,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Ref',
                    width: '100%',
                    margins: 5,
                    border: true,
                    //margin: '0 20 10 10',
                    //afterLabelTextTpl: required,
                    allowBlank: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Descritivo',
                    width: '100%',
                    margin: '0 5 5 5',
                    border: true,
                    //margin: '0 20 10 10',
                    //afterLabelTextTpl: required,
                    allowBlank: true
                }
            ]
            //html: 'Panel one content'
        },
        {
            xtype: 'panel',
            width: '30%',
            layout: 'vbox',
            border: false,
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Tipo',
                    labelAlign: 'left',
                    labelWidth: 30,
                    width: '100%',
                    margins: 5
                    //margin: '0 20 10 0'
                }
            ]
        },
        {
            xtype: 'panel',
            width: '30%',
            layout: 'hbox',
            border: false,
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Código',
                    labelWidth: 40,
                    labelAlign: 'left',
                    width: '70%',
                    margins: 5
                    //margin: '0 20 10 0'
                },
                {
                    xtype: 'button',
                    width: '30%',
                    //margins: 5,
                    margin: '5 10 0 5',
                    //itemId: 'searchButton',
                    //formBind: false,
                    iconCls: 'key-go',
                    text: 'Amarzens' 
                }
            ]
        }
    ]
});