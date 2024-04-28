import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li className="mr-4">
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/New-Post" className="text-white hover:text-gray-300">Add New Post</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar