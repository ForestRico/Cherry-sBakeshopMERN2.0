// test/server.test.js

import { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import App from '../../frontend/src/App.js'; // Assuming your server file is located at src/server.js

// Configure chai
const should = chai.should();
chai.use(chaiHttp);

describe('Server', () => {
  it('should listen for POST requests to /order', (done) => {
    const testData = {
      email: 'test@example.com',
      occasion: 'Birthday',
      // Add more fields as needed
    };

    chai.request(app)
      .post('/order')
      .send(testData)
      .end((err, res) => {
        should.exist(res); // Using `should.exist` instead of `res.should.have.status`
        res.status.should.equal(200); // Assuming you're sending a 200 OK response
        done();
      });
  });
});
