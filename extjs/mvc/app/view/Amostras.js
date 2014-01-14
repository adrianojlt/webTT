Ext.define('Adrz.view.Amostras', {

    extend: 'Ext.container.Container',

    alias: 'widget.amostras',

    layout: 'vbox',

    width: '100%',

    requires: [
        //'Ext.ux.RowExpander'
    ],

    //store: 'customer.Customers',
    
    items: [
        {
            xtype: 'amostraspesquisa'
        },
        {
            xtype: 'amostrasgrid'
        }
    ]
});