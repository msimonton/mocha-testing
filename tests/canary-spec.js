const chai = require('chai');
const should = chai.should();
const expect = chai.expect  //second way
const assert= chai.assert // third way

describe('Canary test', () => {
  it('the string hello should be hello', () => {
    const hello = 'hello';
    
    hello.should.be.equal('hello');
  });

  it('typeof string should be string', ()=> {
    const str = 'aldkjf';

    str.should.be.a('string');
    expect(str).to.be.a('string');  //second way
    assert.typeOf(str, 'string')  //third way
  })
})
