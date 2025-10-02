import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onUserAdded }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!userData.name || !userData.email || !userData.age) {
      setError('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (userData.age <= 0) {
      setError('Tuổi phải là số dương');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const newUser = {
        ...userData,
        age: parseInt(userData.age)
      };

      const response = await axios.post('http://localhost:3000/users', newUser);
      
      // Reset form
      setUserData({ name: '', email: '', age: '' });
      setSuccess(true);
      
      // Notify parent component
      if (onUserAdded) {
        onUserAdded(response.data);
      }

      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
      
    } catch (err) {
      setError('Không thể thêm người dùng. Vui lòng thử lại.');
      console.error('Error adding user:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-user">
      <h2>Thêm người dùng mới</h2>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Thêm người dùng thành công!</div>}
      
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Tên:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Nhập tên người dùng"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Nhập email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Tuổi:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleChange}
            placeholder="Nhập tuổi"
            min="1"
            required
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={loading}
        >
          {loading ? 'Đang thêm...' : 'Thêm người dùng'}
        </button>
      </form>
    </div>
  );
};

export default AddUser;