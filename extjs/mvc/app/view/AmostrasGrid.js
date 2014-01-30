Ext.define('Adrz.view.AmostrasGrid', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.amostrasgrid',

    layout: 'fit',
    width: '100%',
    margins: 5,

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
            dataIndex: 'referencia',
            width: '15%'
            //dataIndex: 'customer_id'
        },
        {
            text: 'Descritivo',
            dataIndex: 'descritivo',
            flex: 1
            //dataIndex: 'first_name'
        },
        {
            text: 'Pelaria', 
            dataIndex: 'descritivo',
            width: '30%'
            //dataIndex: 'last_name'
        },
        {
            text: 'Sola',
            dataIndex: 'descritivo',
            width: '20%'
            //dataIndex: 'email'
        },
        {
            text: 'Forro',
            dataIndex: 'forro',
            width: '20%'
            //dataIndex: 'active',
            //xtype: 'booleancolumn',
            //trueText: 'yes',
            //falseText: 'no'
        }
    ],

    store: Ext.create('Ext.data.Store', {

        fields: ['referencia','descritivo','pelaria','sola','forro'],

        data: [
            {
                'referencia': '1234',
                'descritivo': 'descricao',
                'pelaria': 'pelaria',
                'sola': '30',
                'forro': '30'
            },
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '4312', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
            {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'}
        ]
    })

    /* 
    ,dockedItems: [{
        xtype: 'pagingtoolbar',
        //store: store,   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }]
    */
});