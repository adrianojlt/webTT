Ext.create('Adrz.store.Client', {

	model:'Adrz.controller.Client',

	data:[
		{
			client:1,
			name:'David',
			lastname:'Lee', age:24,
			email:'david@email.com',
			country:'China',
			paydate:'08/08/2012',
			amount:120.5,
			active:true 
		},
		{
			client:2,
			name:'Lisa',
			lastname:'Brown',
			age:25,
			email:'lisa@email.com',
			country:'Australia',
			paydate:'08/08/2012',
			amount:120.5, active:false
		},
		{
			client:3,
			name:'Armando',
			lastname:'Gonzalez',
			age:30,
			email:'armando@email.com',
			country:'Mexico',
			paydate:'08/28/2012',
			amount:120.5,
			active:true 
		},
		{
			client:4,
			name:'Mike',
			lastname:'Chang',
			age:27,
			email:'mike@email.com',
			country:'Japan',
			paydate:'08/08/2012',
			amount:120.5,
			active:false 
		},
		{
			client:5,
			name:'Kevin',
			lastname:'Smith',
			age:28,
			email:'kevin@email.com',
			country:'Usa',
			paydate:'08/08/2012',
			amount:120.5, active:true
		}
	]
});