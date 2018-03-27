const { spawnSync } = require('child_process');
const path = require('path');
const p = require('./lib/p');

module.exports = () => {
	spawnSync('jsdoc', [
		'-c',
		'.jsdoc.config.json',
		'--destination',
		'./docs',
		'--template',
		'.',
		'../ramda-extension/lib',
	], { cwd: p('../'), stdio: 'inherit'});
};