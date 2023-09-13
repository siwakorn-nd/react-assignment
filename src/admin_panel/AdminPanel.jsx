import { useEffect, useState } from "react"
import App from "../App"
import AdminForm from "./AdminForm"
import axios from "axios";
import AdminTableData from "./AdminTableData";

const AdminPanel = () => {
    const [members,setMembers] = useState ([]);
    const [reload,setReload] = useState ();

    useEffect(() => {
        const getData = async() => {
            const response = await axios.get(
                "https://jsd5-mock-backend.onrender.com/members"
            )
            setMembers(response.data)
        }
        getData();
    } ,[reload])
    
    const createData = async(name,lastname,position) => {
            const response = await axios.post(
                "https://jsd5-mock-backend.onrender.com/members",{
                    name:name,
                    lastname:lastname,
                    position:position
                }
            )
        if (response.status === 200) {
            setReload(!reload);
            alert("Create Success")
        }
    }

    const deleteData = async(id) => {
        const response = await axios.delete(
            `https://jsd5-mock-backend.onrender.com/member/${id}`
        )
        if (response.status === 200) {
            setReload(!reload);
            alert("Delete Success")
        }
    }

    return (
        <>
        <App />
        <AdminForm submitHandler={createData} />
        <AdminTableData members={members} deleteHandler={deleteData} />
        </>
    )
}

export default AdminPanel