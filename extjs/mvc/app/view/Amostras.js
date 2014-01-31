Ext.define('Adrz.view.Amostras', {

    extend: 'Ext.container.Container',

    alias: 'widget.amostras',

    layout: 'vbox',

    width: '100%',
    autoScroll: true,
    scroll: true,
    
    requires: [],

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