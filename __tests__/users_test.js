const request = require('supertest');
const app = require('../app');

describe('GET /users', function() {
	it('should get users', function(done) {
		request(app).get('/api/users').expect(200).expect('Content-type', 'application/json; charset=utf-8').end(done);
	});
});

describe('POST /users', function() {
	it('responds with json', function(done) {
		request(app)
			.post('/api/users')
			.send({ firstname: 'jake', lastname: 'mcdonaldsa', password: 'ttt' })
			.expect(201)
			.expect('Content-type', 'application/json; charset=utf-8')
			.end(function(err, res) {
				if (err) return done(err);
				done();
			});
	});

	it('responds with json', function(done) {
		request(app)
			.post('/api/users')
			.send({ firstname: 'jimmy', lastname: '', password: 'tttff' })
			.expect(404)
			.expect('Content-type', 'application/json; charset=utf-8')
			.end(function(err, res) {
				if (err) return done(err);
				done();
			});
	});
});

describe('DELETE /users', function() {
	it('responds with json', function(done) {
		request(app)
			.delete('/api/users/1')
			.expect(404)
			.expect('Content-type', 'application/json; charset=utf-8')
			.end(function(err, res) {
				if (err) return done(err);
				done();
			});
	});

	it('responsds with json', function(done) {
		request(app)
			.delete('/api/users/11')
			.expect(202)
			.expect('Content-type', 'application/json; charset=utf-8')
			.end(function(err, res) {
				if (err) return done(err);
				done();
			});
	});
});
