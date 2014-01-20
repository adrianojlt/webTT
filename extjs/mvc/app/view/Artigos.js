Ext.define('Adrz.view.Artigos', {

    extend: 'Ext.panel.Panel',

    alias: 'widget.artigos',

    layout: 'vbox',

    width: '100%',

    requires: [
        //'Ext.ux.RowExpander'
    ],

    //store: 'customer.Customers',
    
    items: [
        {

            xtype: 'textfield',
            fieldLabel: 'teste',
            labelAlign: 'top',
            width: '10%',
            margin: '0 20 10 10',
            //afterLabelTextTpl: required,
            vtype: 'Message',
            allowBlank: true        
        }
    ]
});