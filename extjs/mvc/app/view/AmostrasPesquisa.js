Ext.define('Adrz.view.AmostrasPesquisa', {

    extend: 'Ext.form.Panel',

    alias: 'widget.amostraspesquisa',

    layout: 'hbox',

    width: '100%',

    requires: [
        //'Ext.ux.RowExpander'
    ],

    //store: 'customer.Customers',

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Ref',
            labelAlign: 'top',
            width: '10%',
            margin: '0 20 10 10',
            //afterLabelTextTpl: required,
            vtype: 'Message',
            allowBlank: true
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Ref. Cliente',
            labelAlign: 'top',
            width: '15%',
            margin: '0 20 10 0',
            //afterLabelTextTpl: required,
            vtype: 'Message',
            allowBlank: true
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Desc',
            labelAlign: 'top',
            width: '20%',
            margin: '0 20 10 0'
        },
        {
            xtype: 'combobox',
            fieldLabel: '&nbsp;',
            hideLabel: false,
            labelSeparator: '',
            labelAlign: 'top',
            width: '10%',
            margin: '0 20 10 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: '&nbsp;',
            labelSeparator: '',
            labelAlign: 'top',
            width: '15%',
            margin: '0 20 10 0',
            vtype: 'Message',
            allowBlank: true
        },
        {
            xtype: 'combobox',
            fieldLabel: '&nbsp;',
            hideLabel: false,
            labelSeparator: '',
            labelAlign: 'top',
            width: '10%',
            margin: '0 20 10 0'
        }
    ]
});