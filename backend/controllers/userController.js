let users = [];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
};
