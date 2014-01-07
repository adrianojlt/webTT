
Ext.onReady(function () {

	formExample();
	//panelExample();

	return;

	//Ext.Msg.alert("Hello World","All set!!!");

	/*
	Ext.create("Ext.Button",{
		text: 		'hello world',
		renderTo: 	Ext.getBody() 
	});
	*/

	Ext.create('Ext.Panel', {
	    //width: '100%',
	    width: 1000,
	    height: 500,
	    //height: '100%',
	    title: "HBoxLayout Panel",
	    layout: {
	        type: 'hbox'
	        //align: 'stretch'
	    },
	    renderTo: document.body,
	    items: [{
	        xtype: 'panel',
	        title: 'Inner Panel One',
	        flex: 2
	    },{
	        xtype: 'panel',
	        title: 'Inner Panel Two',
	        flex: 1
	    },{
	        xtype: 'panel',
	        title: 'Inner Panel Three',
	        flex: 1
	    }]
	});

	var editMenu = Ext.create('Ext.menu.Menu', {
		items: [
			{
				text: 'first'
			},
			{
				text: 'secound'
			}
		]
	});

	editMenu.show();


	Ext.create("Ext.Panel",{
		title : "Hello World Panel",
		items : [
			Ext.create("Ext.form.field.Text",{
				fieldLabel : "Name"
			}),
			Ext.create("Ext.Button",{
				text : "Click",
				handler : function(){
					Ext.Msg.alert(Ext.getCmp("nametext").getValue());
				}
			})
		],
		renderTo : Ext.getBody()
	});
});


function formExample() {

	Ext.create('Ext.form.Panel', {

		// Since the initComponent method is called during the execution of Ext.create(), 
		// we must override it within Ext.create. In order to access the original method, 
		// we must use a work-around to access the overridden method
		 initComponent: function() {

	        // Do something.
	        self = this;

	        // Get a reference to the class.
	        var myClass = Ext.getClass(this);

	        // Apply the overridden method from the class' prototype.
	        myClass.prototype.initComponent.apply(this, arguments);

	        // Do something else.
	    },

        renderTo: Ext.getBody(),
        bodyStyle: 'padding: 5px 5px 0 5px;',

        defaults: {
            xtype: 'textfield',
            anchor: '100%',
        },

        items: [
        	{
		        fieldLabel: 'Email',
		        name: 'email',
		        vtype: 'email',
		        maxLength: 64,            
		        allowBlank: false

		        //listeners: {
		            //specialkey: submitOnEnter
		        //}
        	},
        	{
	            xtype: 'fieldcontainer',
	            fieldLabel: 'Password',
	            layout: 'hbox',

	            items: [
	            	{
		                xtype: 'textfield',
		                name: 'password',
		                flex: 1,
		                vtype: 'password',
		                minLength: 4,
		                maxLength: 32,
		                allowBlank: false
		                //listeners: {
		                    //specialkey: submitOnEnter
		                //}
            		}, 
            		{
		                xtype: 'button',
		                text: 'Random',
		                tooltip: 'Generate a random password',
		                style: 'margin-left: 4px;',
		                flex: 0,
		                handler: function() {
		                    this.prev().setValue(password(8, false));
		                    this.prev().focus()
		            	}
            		}
            	]
        	}
        ],
        
        buttons: [{
            id: 'saveBtn',
            itemId: 'saveBtn',
            text: 'Submit',
            handler: function() {
                this.up('form').getForm().submit();
            }
        },{
            text: 'Cancel',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }],
        submit: function() {
            var currentForm = this.owner.form;
            
            if (currentForm.isValid()) {
                // var newSomething = Ext.create('Something', currentForm.getFieldValues());
            }
        }
    });
}

function panelExample() {

	Ext.create('Ext.form.Panel', {

        title: 'Simple Form with FieldSets',

        labelWidth: 75,

        // label settings here cascade unless overridden
        url: 'save-form.php',
        frame: true,
        bodyStyle: 'padding:5px 5px 0',
        width: 550,
        renderTo: Ext.getBody(),
        layout: 'column',

        // arrange fieldsets side by side
        defaults: {
            bodyPadding: 4
        },

        items: [
        {
            // Fieldset in Column 1 - collapsible via toggle button
            xtype: 'fieldset',
            columnWidth: 0.5,
            title: 'Fieldset 1',
            collapsible: true,
            defaultType: 'textfield',

            defaults: {
                anchor: '100%'
            },

            layout: 'anchor',

            items: [
            	{
                	fieldLabel: 'Field 1',
                	name: 'field1'
            	}, 
            	{
	                fieldLabel: 'Field 2',
	                name: 'field2'
            	}
            ]
        }, 
        {
            // Fieldset in Column 2 - collapsible via checkbox, collapsed by default, contains a panel
            xtype: 'fieldset',
            title: 'Show Panel',
            // title or checkboxToggle creates fieldset header
            columnWidth: 0.5,
            checkboxToggle: true,
            collapsed: true,
            // fieldset initially collapsed
            layout: 'anchor',
            items: [{
                xtype: 'panel',
                anchor: '100%',
                title: 'Panel inside a fieldset',
                frame: true,
                height: 52
            }]
        }]
    });
}