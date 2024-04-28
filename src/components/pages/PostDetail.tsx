import { useParams } from "react-router-dom";
import PostsLists from "../../PostsData.json";
export interface User {
    "id": number,
    "title": string,
    "content": string,
    "authorName": string
}
function PostDetail() {
    const posts = JSON.parse(localStorage.getItem('posts') || JSON.stringify(PostsLists))
    // const navigate = useNavigate();
    const { id } = useParams()
    // let Post = User()
    const Post = posts.find((item: User) => item.id === parseInt(id || '0'))
    if (!Post) {
        return <div className="container mx-auto px-4 py-8">Post not found</div>;
    }
    return (
        <>
            <div>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8">{Post.title}</h1>
                    <p className="text-gray-700 mb-4">{Post.content}</p>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-600">Author: {Post.authorName}</p>
                        {/* <p className="text-gray-600">Posted on: {Post.date}</p> */}
                    </div>
                </div>
            </div>

            {/* <p>This is the welcome page.</p> */}
        </>
    );
}

export default PostDetail