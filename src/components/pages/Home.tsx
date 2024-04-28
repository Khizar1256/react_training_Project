import { Link } from "react-router-dom";

function Home() {


    return (
        <>
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <p>This is the welcome page.</p>
        </>
    );
}

export default Home