// import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar bg-neutral text-neutral-content flex flex-row-reverse">
            <ul>
                <li><a href={'/'} className="btn btn-ghost normal-case text-xl">Home</a></li>
                <li><a href={'/owner'} className="btn btn-ghost normal-case text-xl">Owner</a></li>
            </ul>
        </nav>
    )
}

export default Navbar 