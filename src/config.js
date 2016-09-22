requirejs.config({

	baseUrl: '.',

	/** Test Case 1 **/
	// modules: [{
	// 	name: 'moda/main', exclude: ['modb/main', 'misc/main']
	// }, {
	// 	name: 'modb/main', exclude: ['moda/main', 'misc/main']
	// }, {
	// 	name: 'misc/main', exclude: ['moda/main', 'modb/main']
	// }]

	/** Test Case 2 **/
	modules: [{
		name: 'modb/main', exclude: ['moda/main', 'misc/main']
	}, {
		name: 'moda/main', exclude: ['modb/main', 'misc/main']
	}, {
		name: 'misc/main', exclude: ['moda/main', 'modb/main']
	}]

});
