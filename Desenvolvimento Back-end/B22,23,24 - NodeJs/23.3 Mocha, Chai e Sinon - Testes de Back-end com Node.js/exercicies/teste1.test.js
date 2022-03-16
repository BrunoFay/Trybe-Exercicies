const { expect } = require('chai')
const checkNumber = require('./exe1.js')
const { stub } = require('sinon')
const createFile = require('./exe2.js')
const fs = require('fs')


describe('checks if the function returns "positive", "negative" or "neutral" when entering a number', () => {
  const checkNumFunc = checkNumber(2)
  it('when entering a value that is not a number returns an error', () => {
    expect(() => { checkNumber({}) }).to.throw('the value entered is not of type number')
  });
  it('the function returns the correct value', () => {
    expect(checkNumFunc).to.be.equal('positive')
  });
  it('the result is of type string', () => {
    expect(checkNumFunc).to.be.a('string')
  });

});

describe('checks if the function to write to files has the correct behaviors', () => {
  describe('checks if the function shows an error if the parameters are invalid or a parameter is missing', () => {
    before(() => {
      stub(fs, 'writeFileSync')
        .throws(new Error('both parameters need to be filled'));
    });

    after(() => {
      fs.writeFileSync.restore();

    });
    it('if parameters are filled with valid values', () => {
      expect(() => { createFile('exe2') }).to.throw('both parameters need to be filled')
    });

  })

  describe('checks if the function works correctly with certain parameters', () => {

    before(() => {
      stub(fs, 'writeFileSync').returns('ok');
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    it('when filling with acceptable values, it issues "ok"', () => {

      expect(createFile('exe2', 'dasdkjasdj')).to.be.equal('ok')
    });
  })
});