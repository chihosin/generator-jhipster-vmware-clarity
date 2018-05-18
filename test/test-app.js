/* global describe, beforeEach, it */

const path = require('path');
const fse = require('fs-extra');
const helpers = require('yeoman-test');

describe('JHipster generator vmware-clarity', () => {
    describe('Test with AngularX', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/maven-angularX'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    message: 'Test mode'
                })
                .on('end', done);
        });
    });
});
