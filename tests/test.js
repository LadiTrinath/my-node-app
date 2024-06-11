const request = require('supertest');
const server = require('../src/index');

describe('GET /', () => {
  it('should return 200 OK with "Hello World"', (done) => {
    request(server)
      .get('/')
      .expect('Content-Type', /text\/plain/)
      .expect(200, 'Hello World\n', done);
  });
});

