#!/usr/bin/env node

const fs = require('fs');

const travisString = `language: node_js\nnode_js:\n  - "4"\n  - "6"`;

createFile()
	.then(() => { console.log('cool'); })
	.catch(err => {
		console.error(err);
		console.error(err.stack);
	});

function createFile(){
	return new Promise((resolve, reject) =>{

		fs.writeFile(`.travis.yml`, travisString, err => {
			if (err) return reject(err);
			resolve();
		});

	});
}