const chai = require('chai');
const app = require('../app.js');

const supertest = require('supertest');

const should = chai.should();
const api = supertest(app);


describe('sending a POST to /api/add', () => {
  describe('should succed', () => {
    it('in adding two numbers together', (done) =>  {
      api.post('/api/add')
      .send({
        num1: 5,
        num2: 2
      })
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);

        res.body.result.should.be.equal(7);

        done();
      })
    })
  })
  describe('should fail', () => {
    it('when nothing is sent in ', (done) =>  {
      api.post('/api/add')
      .expect(432)
      .end((err, res) => {
        if(err) return done(err);
        res.body.message.should.be.equal('No data fool')
        done();
      })
    })
  })
})
