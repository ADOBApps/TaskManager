const tasksctrl = {};

const Taskmodel = require('../models/tasks');

tasksctrl.getTasks = async (req, res) => {
	const Alltasks = await Taskmodel.find();
	res.json(Alltasks);
	console.log(Alltasks);
}
tasksctrl.getTask = async (req, res) => {
	const task_s = await Taskmodel.findById(req.params.id);
	res.json(task_s);
	console.log(task_s);
}

tasksctrl.createTask = async (req, res) => {
	const { title, content, date } = req.body;
	const newTask = new Taskmodel({
		title: title,
		content: content,
		date: date
	});
	await newTask.save();
	console.log(newTask);
	res.json({'message': 'task saved'});
}
tasksctrl.updateTask = async (req, res) => {
	console.log(req.params.id, req.body);
	const { title, content, date } = req.body;

	await Taskmodel.findByIdAndUpdate(req.params.id, {
		title,
		content,
		date
	});
	res.json({'message': 'task updated'});
}

tasksctrl.deleteTask = async (req, res) => {
	await Taskmodel.findByIdAndDelete(req.params.id);
	res.json({'message': 'task deleted'});
	console.log('task deleted');
}


module.exports = tasksctrl;