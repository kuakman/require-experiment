requirejs.config({

	baseUrl: './',

	/** Test Case 1 **/
	modules: [{
		name: 'a', exclude: ['c'],
	}, {
		name: 'b', exclude: ['a']
	}]

	/** Test Case 2 **/
	// modules: [{
	// 	name: 'b', exclude: ['a']
	// }, {
	// 	name: 'a', exclude: ['c'],
	// }]

});
