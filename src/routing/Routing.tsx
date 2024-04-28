import { useEffect } from "react"
import PostsLists from '../../src/PostsData.json';
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import AddPost from "../components/pages/AddPost";
import NotFound from "../components/pages/NotFound";
import PostDetail from "../components/pages/PostDetail";
import Posts from "../components/pages/Posts";
function Routing() {
  useEffect(() => {
      localStorage.setItem('posts', JSON.stringify(PostsLists))
  },[])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route index element={<Posts/>}/>
        <Route path='/New-Post' element={<AddPost/>}/>
        <Route path='/post/:id' element={<PostDetail/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default Routing
