frontend
let users = [
  { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@email.com", age: 25 },
  { id: 2, name: "Trần Thị B", email: "tranthib@email.com", age: 30 },
  { id: 3, name: "Lê Văn C", email: "levanc@email.com", age: 22 }
];
let nextId = 4;
// backend/controllers/userController.js
main

// 1. Import User model
const User = require('../models/user');

// Dòng "let users = [];" đã được xóa bỏ.

frontend
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
// 2. Cập nhật hàm getUsers
// Chuyển thành hàm async để sử dụng await
exports.getUsers = async (req, res) => {
  try {
    // 3. Dùng User.find() để lấy tất cả user từ MongoDB
    // Lệnh này tương đương với "SELECT * FROM users" trong SQL
    const users = await User.find();
    res.json(users);
  } catch (err) {
    // 4. Xử lý lỗi nếu có sự cố khi truy vấn database
    res.status(500).json({ message: "Đã xảy ra lỗi khi lấy danh sách người dùng", error: err.message });
  }
main
};

// 5. Cập nhật hàm createUser
// Chuyển thành hàm async để sử dụng await
exports.createUser = async (req, res) => {
  // Tạo một đối tượng user mới dựa trên model User và dữ liệu từ request body
  const user = new User({
    name: req.body.name,
    email: req.body.email
  });

  try {
    // 6. Dùng user.save() để lưu user vào database
    const newUser = await user.save();
    // 7. Trả về status 201 (Created) và dữ liệu của user vừa tạo
    res.status(201).json(newUser);
  } catch (err) {
    // 8. Xử lý lỗi, ví dụ như email bị trùng hoặc thiếu trường dữ liệu
    // Trả về status 400 (Bad Request)
    res.status(400).json({ message: "Không thể tạo người dùng mới", error: err.message });
  }
};