import { Link } from "react-router-dom";

function About() {

    return (
        <>
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <p>This is the About US page.</p>
        </>
    );
}

export default About