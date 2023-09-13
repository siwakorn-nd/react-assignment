// eslint-disable-next-line react/prop-types
const AdminTableData = ({ members,deleteHandler}) => {
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
                    <button onClick={() => deleteHandler(member.id)} className="btn btn-sm btn-error my-2">Delete</button>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default AdminTableData