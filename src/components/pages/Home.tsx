import { Outlet } from "react-router-dom";
// import PostsLists from "../../PostsData.json";
export interface User {
    "id": number,
    "title": string,
    "content": string,
    "authorName": string
}
function Home() {
    // const data = JSON.parse(localStorage.getItem('posts') || JSON.stringify(PostsLists))
    return (
        <>
            <Outlet />

            {/* <p>This is the welcome page.</p> */}
        </>
    );
}

export default Home