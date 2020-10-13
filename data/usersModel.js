const db = require('./dbConfig');

module.exports = {
	getUsers,
	insertUser,
	deleteUser,
	getUserById
};

function getUsers() {
	return db('users');
}

function getUserById(id) {
	return db('users').where({ id });
}

function insertUser(newUser) {
	return db('users').insert(newUser).then((user) => getUserById(user[0]));
}

function deleteUser(id) {
	return db('users').where({ id }).del();
}
