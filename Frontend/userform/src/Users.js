import { useEffect, useState } from "react"
import axios from "axios"



const Users = () => {

    const[users, setUsers] = useState([]);
    const[submitted, setSubmitted] = useState(false);
    const[selectedUser, setSelectedUser] = useState({});
    const[isEdit, setIsEdit] = useState(false);


    useEffect(() => {
        getUserData();
    }, []);


    return (
        <div>

        </div>
    )
}