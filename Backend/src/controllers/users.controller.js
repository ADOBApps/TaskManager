const usersctrl = {};

const Usersmodel = require('../models/users');

usersctrl.getUsers = async (req, res) => {
	const users = await Usersmodel.find();
	res.json(users);
	console.log(users);
}
usersctrl.createUser = async (req, res) => {
	const {username} = req.body;
	const newUser = new Usersmodel({username});
	await newUser.save();
	res.json({'message': 'User saved'});
}
usersctrl.deleteUser = async (req, res) => {
	await Usersmodel.findByIdAndDelete(req.params.id);
	res.json({'message': 'User deleted'});
}

module.exports = usersctrl;