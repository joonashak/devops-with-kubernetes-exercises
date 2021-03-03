const todos = [];

const findAll = (req, res) => res.json(todos);

const create = (req, res) => {
  todos.push(req.body.newTodo)
  res.send(200);
};

module.exports = {
  findAll,
  create,
};
