Ext.define('MyApp.Application', {
			extend : 'Ext.app.Application',
			name : 'MyApp',
			views : ['MyApp.view.Dashboard', 'MyApp.view.TreeNode',
					'MyApp.view.DashboardViewController'
			// TODO: add views here
			],

			controllers : [
			// TODO: add controllers here
			],

			stores : ['MyApp.store.Dashboard'
			// TODO: add stores here
			]
		});
