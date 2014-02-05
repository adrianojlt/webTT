Ext.define('Adrz.view.Grid', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.grid',

    //layout: 'hbox',
    layout: 'fit',

    width: '100%',
    margins: 5,

    requires: [],

    columnLines: true,
    autoScroll: true,
    scroll: true,
    
    viewConfig: {
        stripeRows: true
    },

    //columns: [],

    features: [
        {
            ftype: 'summary',
            //ftype: 'grouping'
            dock: 'bottom'
        }
    ],

    initComponent: function() {

        var me = this;

        me.store = this.buildStore();
        me.columns = this.buildColumns();

        this.callParent(arguments);
    },

    buildColumns: function() {

        var columns = [
            {
                text: 'Referência',
                dataIndex: 'referencia',
                summaryType: 'count',
                minWidth: 100,
                //renderer: function (a, b , c, d, e) {//console.log(a); //return "test"; },
                summaryRenderer: function(a,b,c) {
                    console.log(b); console.log(c);
                    summaryData = b;
                    field = c;
                    return 'total = ' + a;
                },
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
                summaryType: 'average',
                width: '20%'
                //dataIndex: 'active',
                //xtype: 'booleancolumn',
                //trueText: 'yes',
                //falseText: 'no'
            }
        ]

        return columns;
    },

    buildStore: function() {

       var store =  Ext.create('Ext.data.Store', {

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
                {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '29'},
                {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '10'},
                {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
                {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
                {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
                {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '20'},
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
                {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'},
                {'referencia': '1234', 'descritivo': 'descricao', 'pelaria': 'pelaria', 'sola': '30', 'forro': '30'}
            ]
        });

        return store;
    }
});