Ext.define('Adrz.view.AmostrasGrid', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.amostrasgrid',

    layout: 'hbox',

    width: '100%',

    requires: [
        //'Ext.ux.RowExpander'
    ],

    //store: 'customer.Customers',

    columnLines: true,
    
    viewConfig: {
        stripeRows: true
    },

    columns: [
        {
            text: 'Referência',
            width: '15%'
            //dataIndex: 'customer_id'
        },
        {
            text: 'Descritivo',
            flex: 1
            //dataIndex: 'first_name'
        },
        {
            text: 'Pelaria', 
            width: '30%'
            //dataIndex: 'last_name'
        },
        {
            text: 'Sola',
            width: '20%'
            //dataIndex: 'email'
        },
        {
            text: 'Forro',
            width: '20%',
            //dataIndex: 'active',
            xtype: 'booleancolumn',
            trueText: 'yes',
            falseText: 'no'
        }
    ]
});