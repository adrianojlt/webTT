Ext.define('Adrz.view.Amostras', {

    extend: 'Ext.container.Container',

    alias: 'widget.amostras',

    layout: 'vbox',
    autoScroll: true,
    width: '100%',

    requires: [],

    //store: 'customer.Customers',
    
    items: [
        {
            xtype: 'amostraspesquisa'
        },
        {
            xtype: 'amostrasgrid',
            layout: 'fit'
        }
    ]
});