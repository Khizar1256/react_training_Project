// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostsLists from "../../PostsData.json";
import { useState } from "react";
export interface User {
    "id": number,
    "title": string,
    "content": string,
    "authorName": string
}
function AddPosts() {
    const data = JSON.parse(localStorage.getItem('posts') || JSON.stringify(PostsLists));
    const [authorName, setAuthorName] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const navigate = useNavigate();

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPost: User = {
            authorName: authorName,
            title: title,
            content: content,
            id: data.length + 1 // Generate unique ID
        };
        setAuthorName("");
        setTitle("");
        setContent("");
        localStorage.setItem('posts',JSON.stringify([...data, newPost]));
        navigate('/')
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Author Name"
            />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
            />
            <button type="submit">Add Post</button>
        </form>
    );
}

export default AddPosts