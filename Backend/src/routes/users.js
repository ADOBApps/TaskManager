const { Router} = require('express');
const router = Router();

const {getUsers, createUser, deleteUser} = require('../controllers/users.controller');

router.route('/')
	.get(getUsers)
	.post(createUser)
	.delete(deleteUser);

module.exports = router;