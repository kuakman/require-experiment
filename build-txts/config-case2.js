requirejs.config({
	baseUrl: './',
	modules: [
		{
			name: 'b',
			exclude: [
				'a'
			]
		},
		{
			name: 'a',
			exclude: [
				'c'
			]
		}
	],
	bundles: {
		b: [
			'f'
		],
		a: [
			'd',
			'e'
		]
	}
});
