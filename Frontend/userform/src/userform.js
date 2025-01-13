import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
  const [user, setUser] = useState({ id: '', name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Submitted:', user);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={user.id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
