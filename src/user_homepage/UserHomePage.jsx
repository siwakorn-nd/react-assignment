import { useEffect , useState } from "react";
import App from "../App";
import axios from "axios";
import UserDataTable from "./UserDataTable";

const UserHomePage = () => {
    const [members,setMembers] = useState ([]);

    useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            "https://jsd5-mock-backend.onrender.com/members"
          );
          setMembers(response.data);
        };
    
        getData();
    }, []);

    
    return (
        <div className="">
            <App />
            <UserDataTable members={members} />
        </div>
    )
}

export default UserHomePage