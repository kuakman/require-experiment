// Proof of concept for amodro-trace
// See what guy this does for me.

let path = require('path');
let resolve = path.resolve;
let fs = require('fs-extra');
let _ = require('underscore');
let _s = require('underscore.string');
let glob = require('glob');
let extend = require('extend');
let asyncLib = require('async');
let amodroTrace = require('amodro-trace');
let defines = require('amodro-trace/write/defines');
let config = require('amodro-trace/config');
let ad_config = require('./amodro.config.json');

class Tracer {

	constructor(file = '') {
		return extend(false, this, this.init(file));
	}

	init(file) {
		return {
			main: extend(true, {
				rootDir: './src',
				id: file,
				writeTransform: defines({ wrapShim: true })
			}, ad_config.main),
			config: ad_config.config,
			file: file
		};
	}

	run() {
		try {
			return amodroTrace(this.main, this.config)
				.then(_.bind(this.success, this))
				.catch(this.error);
		} catch(ex) {
			console.error(ex);
		}
	}

	success(results) {
		let finalPath = resolve('./traced', `${this.file}on`);
		fs.ensureFileSync(finalPath);
		fs.writeJsonSync(finalPath, results, { spaces: 4 });
	}

	error(err) {
		console.log(err);
	}

	static install(libs) {
		_.each(libs, (p, name) => {
			let sPath = _s.strLeftBack(_s.strRight(p, '/'), '/');
			let dPath = _s.strLeftBack(p, '/');
			fs.copySync(resolve('node_modules', sPath), resolve('./src', dPath));
		});
	}

	static new(...args) {
		return new this(...args);
	}

}

fs.removeSync('./traced');
//Tracer.install(ad_config.config.paths);

let files = glob.sync('./**/main.js', { cwd: './src' });
_.each(files, (f) => Tracer.new(f).run());
