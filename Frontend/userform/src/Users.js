import { useEffect, useState } from "react"
import Axios from "axios"

const Users = () => {

    const[users, setUsers] = useState([]);
    const[submitted, setSubmitted] = useState(false);
    const[selectedUser, setSelectedUser] = useState({});
    const[isEdit, setIsEdit] = useState(false);


    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = () => {
        Axios.get('')
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
    

        Axios.post('', payload)
            .then(() => {
                console.log('success');
                getUserData();
                setSubmitted(false);
                isEdit(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };    

    const updateUser = (data) => {
        setSubmitted(true);
        const payload = {
            id:data.id,
            name: data.name,
        };
        Axios.post('', payload)
            .then(() => {
                console.log('success');
                getUserData();
                setSubmitted(false);
                isEdit(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteUser = (data) => {
        setSubmitted(true);

        const payload = {
            id:data.id,
            name: data.name,
        };

        Axios.post('', payload)
            .then(() => {
                console.log('success');
                getUserData();
                setSubmitted(false);
                isEdit(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div>

        </div>
    )
}