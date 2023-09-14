import { useState } from "react";
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const AdminTableData = ({ members,deleteHandler,updateHandler}) => { 
    const [name,setName] =useState('');
    const [lastname,setLastname] = useState('');
    const [position,setPosition] = useState('');
    const [id,setId] = useState();
    
    return (
        <div className="overflow-x-auto mx-9 w-100 flex justify-center">
        <table className="table bg-primary-content w-4/6">
            <thead>
                <tr>
                <th className="text-lg">Name</th>
                <th className="text-lg">Last Name</th>
                <th className="text-lg">Position</th>
                <th className="text-lg">Action</th>
                </tr>
            </thead>
            <tbody>
                {members.map((member) =>
                <tr key={member.id}>
                    <td className="text-base">{member.name}</td>
                    <td className="text-base">{member.lastname}</td>
                    <td className="text-base">{member.position}</td>
                    <button onClick={() => deleteHandler(member.id)} className="btn btn-sm btn-error m-2">Delete</button>
                    {/* edit button modal */}
                    <button 
                    className="btn btn-primary btn-sm m-2 " 
                    onClick={()=>{
                        setId(member.id)
                        document.getElementById('my_modal_1').showModal()}}
                    >
                    Edit
                    </button>
                    <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit Mode</h3>
                        <form>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(ev) => setName(ev.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Lastname"

                            onChange={(ev) => setLastname(ev.target.value)}
                        />
                        <input 
                            type="text"
                            placeholder="Position"
                            onChange={(ev) => setPosition(ev.target.value)}
                        />
                        </form>
                    <div className="modal-action">
                        {/* Daisy UI modal Dialog */}
                        <form method="dialog">
                            <button className="btn">Close</button>
                            <button className="btn" onClick={() => updateHandler(id,name,lastname,position)}>Save</button>
                        </form>
                    </div>
                    </div>
                    </dialog>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default AdminTableData