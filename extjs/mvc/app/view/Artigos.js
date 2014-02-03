Ext.define('Adrz.view.Artigos', {

    //extend: 'Ext.panel.Panel',
    extend: 'Ext.container.Container',

    alias: 'widget.artigos',

    layout: 'border',

    requires: [],

    items: [
        {
            region: 'north',
            xtype: 'artigosheader',
            margin: '5 5 0 5',
            border: true
        },
        {
            region: 'center',
            xtype: 'artigostabs',
            border: true
        }
    ]
});