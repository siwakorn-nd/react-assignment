// eslint-disable-next-line react/prop-types
const UserDataTable = ({members}) => {
    return(
        <div className="overflow-x-auto mx-9 w-100 flex justify-center">
        <table className="table bg-primary-content w-4/6">
            <thead>
                <tr>
                    <th className="text-lg">Name</th>
                    <th className="text-lg">Last Name</th>
                    <th className="text-lg">Position</th>
                </tr>
            </thead>
            <tbody>
                {members.map((member) =>
                <tr key={member.id}>
                    <td className="text-base">{member.name}</td>
                    <td className="text-base">{member.lastname}</td>
                    <td className="text-base">{member.position}</td>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default UserDataTable