import { useEffect, useState } from "react";
import Axios from "axios";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    Axios.get('https://api.example.com/users')
      .then((response) => {
        setUsers(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post('https://api.example.com/addUser', payload)
      .then(() => {
        console.log('success');
        getUserData();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post('https://api.example.com/updateUser', payload)
      .then(() => {
        console.log('success');
        getUserData();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post('https://api.example.com/deleteUser', payload)
      .then(() => {
        console.log('success');
        getUserData();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="users-container">
      <h1 className="title">User List</h1>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p>ID: {user.id}</p>
            <button className="edit-btn" onClick={() => setSelectedUser(user)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteUser(user)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
