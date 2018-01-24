var os = require('os');
var time = require('./time');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log(colors.cyan('System:', type));
	console.log(colors.yellow('Release:', release));
	console.log(colors.red.bgCyan('CPU model:', cpu));
	time.print(uptime);
	console.log(colors.green('User name:', userInfo.username));
	console.log(colors.red('Home dir:', userInfo.homedir));
}

exports.print = getOSinfo;