const lib = require('./index');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;
describe('create steps', function () {
    it('basic steppers 3', function () {
        let res = lib.pyramid(3);
    });
});