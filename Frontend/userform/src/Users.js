import { useEffect, useState } from "react";
import Axios from "axios";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    Axios.get('http://localhost:8080/api/v1/getusers')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addUser = (data) => {
    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post('http://localhost:8080/api/v1/adduser', payload)
      .then(() => {
        console.log('success');
        getUserData();
        setIsEdit(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateUser = (data) => {
    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.put('http://localhost:8080/api/v1/updateuser', payload)
      .then(() => {
        console.log('success');
        getUserData();
        setIsEdit(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:8080/api/v1/deleteuser/${id}`)
      .then(() => {
        console.log('success');
        getUserData();
      })
      .catch((error) => {
        console.error('Error deleting user:', error.response || error);
      });
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEdit(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateUser(selectedUser);
    } else {
      addUser(selectedUser);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  return (
    <div className="users-container">
      <h1 className="title">User List</h1>
      {isEdit && (
        <form className="user-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="id"
            value={selectedUser.id}
            onChange={handleInputChange}
            placeholder="ID"
            disabled={isEdit}
          />
          <input
            type="text"
            name="name"
            value={selectedUser.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <button type="submit">{isEdit ? "Update" : "Add"} User</button>
        </form>
      )}
      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p>ID: {user.id}</p>
            <button className="edit-btn" onClick={() => handleEditClick(user)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
