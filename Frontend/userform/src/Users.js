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
    Axios.get('https://localhost:8080/api/v1/getusers')
      .then((response) => {
        setUsers(response.data);
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

    Axios.post('https://localhost:8080/api/v1/adduser', payload)
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

    Axios.post('https://localhost:8080/api/v1/updateuser', payload)
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

    Axios.post('https://localhost:8080/api/v1/deleteuser', payload)
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
