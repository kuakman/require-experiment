requirejs.config({
	baseUrl: './',
	modules: [
		{
			name: 'a',
			exclude: [
				'c'
			]
		},
		{
			name: 'b',
			exclude: [
				'a'
			]
		}
	],
	bundles: {
		a: [
			'd',
			'e'
		],
		b: [
			'c',
			'f'
		]
	}
});
