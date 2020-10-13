const express = require('express');
const usersRouter = express.Router();

const User = require('../data/usersModel');

usersRouter.get('/', (req, res) => {
	User.getUsers()
		.then((users) => {
			return res.status(200).json(users);
		})
		.catch((err) => console.log('err', err));
});

usersRouter.post('/', (req, res) => {
	const { firstname, lastname, password } = req.body;
	if (!firstname || !lastname || !password)
		return res.status(404).json({ error: 'You must enter a firstname, lastname, and password' });

	User.insertUser(req.body)
		.then((newUser) => {
			return res.status(201).json(newUser);
		})
		.catch((err) => console.log('err', err));
});

usersRouter.delete('/:id', (req, res) => {
	const userId = req.params.id;
	if (!userId) return res.status(400).json({ error: 'You must enter a userId' });

	User.deleteUser(userId)
		.then((user) => {
			if (!user) return res.status(404).json({ error: 'The user is not found' });
			return res.status(202).json({ message: 'ok' });
		})
		.catch((err) => console.log('err', err));
});

module.exports = usersRouter;
