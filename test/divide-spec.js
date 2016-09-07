const chai = require('chai');
const app = require('../app.js');

const supertest = require('supertest');

const should = chai.should();
const api = supertest(app);


describe('sending a POST to /api/divide', () => {
  describe('should succed', () => {
    it('in dividing one number by another', (done) =>  {
      api.post('/api/divide')
      .send({
        num1: 10,
        num2: 2
      })
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);

        res.body.result.should.be.equal(5);

        done();
      })
    })
  })
  describe('should fail', () => {
    it('when nothing is sent in ', (done) =>  {
      api.post('/api/divide')
      .expect(432)
      .end((err, res) => {
        if(err) return done(err);
        res.body.message.should.be.equal('No data fool')
        done();
      })
    })
  })
})
