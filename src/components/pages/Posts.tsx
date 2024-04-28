import { Link } from "react-router-dom";
import PostsLists from "../../PostsData.json";
export interface User {
    "id": number,
    "title": string,
    "content": string,
    "authorName": string
}
function Posts() {
    const data = JSON.parse(localStorage.getItem('posts') || JSON.stringify(PostsLists))
    return (
        <>
            <div>
                <ul>
                    {data.map((item: User) => (
                        <li className="mt-6" key={item.id}>
                            <Link to={`/post/${item.id}`} className="text-blue-500 hover:text-blue-700">Title: {item.title}</Link>
                            <div className="mt-3">
                                <p className="text-gray-700">Content: <span className="text-gray-900">{item.content}</span></p>
                            </div>
                            <div className="mt-3">
                                <p className="text-gray-700">Author Name: <span className="text-gray-900">{item.authorName}</span></p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <p>This is the welcome page.</p> */}
        </>
    );
}

export default Posts