let users = [
  { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@email.com", age: 25 },
  { id: 2, name: "Trần Thị B", email: "tranthib@email.com", age: 30 },
  { id: 3, name: "Lê Văn C", email: "levanc@email.com", age: 22 }
];
let nextId = 4;

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  const user = {
    id: nextId++,
    ...req.body
  };
  users.push(user);
  res.status(201).json(user);
};

exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  users.splice(userIndex, 1);
  res.status(204).send();
};
