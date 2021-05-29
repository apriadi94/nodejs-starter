// process.env.NODE_ENV = 'test';

// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../server');
// let should = chai.should();


// chai.use(chaiHttp);

// describe('Api', () => {
//     beforeEach((done) => {
//         Model.remove({}, (err) => {
//            done();
//         });
//     });
//   describe('/GET uri', () => {
//       it('it should GET all the data', (done) => {
//         chai.request(server)
//             .get('/endpoint')
//             .end((err, res) => {
//                   res.should.have.status(200);
//                   res.body.should.be.a('array');
//                   res.body.length.should.be.eql(0);
//               done();
//             });
//       });
//   });
// });