const usersctrl = {};

usersctrl.getUsers = (req, res) => res.json({'message': 'GET reques'});
usersctrl.createUser = (req, res) => res.json({'message': 'Post reques'});
usersctrl.deleteUser = (req, res) => res.json({'message': 'delete reques'});

module.exports = usersctrl;