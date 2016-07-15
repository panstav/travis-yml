const fs = require('fs');

const expect = require('expect.js');
const execa = require('execa');

after(() => {
	return execa.shell('rm ./.travis.yml');
});

describe('TravisYML', () => {

	it('Should create the file', done => {

		return execa.shell('node ./cli.js')
			.then(lookupTravisFile)
			.catch(err => {
				console.error(err);
				console.error(err.stack);
			});

		function lookupTravisFile(){

			fs.exists('./.travis.yml', exists =>{
				expect(exists).to.be.equal(true);

				done();
			});

		}

	});

});