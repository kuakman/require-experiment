var fs = require('fs-extra');
var rjs = require('requirejs');

fs.removeSync('./out');

rjs.optimize({
	appDir: './src',
	dir: './out',
	mainConfigFile: './src/config.js',
	optimize: 'none',
	removeCombined: true,
	findNestedDependencies: true,
	bundlesConfigOutFile: './config.js'
})
