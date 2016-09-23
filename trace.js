// Proof of concept for amodro-trace
// See what this guy does for me.

let path = require('path');
let resolve = path.resolve;
let _ = require('underscore');
let glob = require('glob');
let extend = require('extend');
let amodroTrace = require('amodro-trace');
let ad_config = require('./amodro.config.json');

class Tracer {

	constructor(file = '') {
		return extend(false, this, this.init(file));
	}

	init(file) {
		return {
			main: extend(true, { rootDir: './src', id: file }, ad_config.main),
			config: ad_config.config
		};
	}

	run() {
		return amodroTrace(this.main, this.config)
			.then(this.success)
			.catch(this.error);
	}

	success(results) {
		console.log(JSON.stringify(results, null, 2));
	}

	error(err) {
		console.error(err);
	}

	static new(...args) {
		return new this(...args);
	}

}

let files = glob.sync('./**/main.js', { cwd: './src' });
_.each(files, (f) => Tracer.new(f).run());
