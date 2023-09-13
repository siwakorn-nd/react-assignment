import { useState } from "react"

// eslint-disable-next-line react/prop-types
const AdminForm = ({ submitHandler }) => {
    // const [id,setId] = useState();
    const [name,setName] =useState();
    const [lastname,setLastname] = useState();
    const [position,setPosition] = useState();
    
    return (
        <>
        <div className="flex justify-center">
            <form className="my-10 w-100 flex">
                <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                />
                <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full max-w-xs"
                value={lastname}
                onChange={(ev) => setLastname(ev.target.value)}
                />
                <input
                type="text"
                placeholder="Position"
                className="input input-bordered w-full max-w-xs"
                value={position}
                onChange={(ev) => setPosition(ev.target.value)}
                />
            </form>
        </div>
        <div className="w-100 flex justify-center mb-10">
            <button onClick={() => submitHandler(name,lastname,position)} className="btn btn-primary">Save</button>
        </div>
        
        </>
    )
}

export default AdminForm