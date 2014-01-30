Ext.define('Adrz.view.Artigos', {

    //extend: 'Ext.panel.Panel',
    extend: 'Ext.container.Container',

    alias: 'widget.artigos',

    layout: 'border',
    border: false,

    width: '100%',


    //height: '100%',

    requires: [
        //'Ext.ux.RowExpander'
    ],

    items: [
        {
            region: 'north',
            layout: 'hbox',
            margins: 5,
            border: false,
            items: [
                {
                    margins: 5,
                    html: 'Panel one content'
                },
                {
                    margins: 5,
                    html: 'Panel two content'
                },
                {
                    margins: 5,
                    html: 'Panel tree content'
                }
            ]
        },
        {
            region: 'center',
            //layout: 'fit',
            //margins: 5,
            border: false,
            items: [
                {

                }
            ]
        }
    ]
});