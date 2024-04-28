// import NavBar from "../molecule/Navbar"

function NotFound() {

    return (
        <>
            <div className=" flex items-center justify-center bg-white-100">
                <div className="max-w-md text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
                    <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for could not be found.</p>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={() => window.history.back()}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </>
    );
}

export default NotFound