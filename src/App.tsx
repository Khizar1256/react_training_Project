import './App.css'
import { BrowserRouter } from "react-router-dom";
import PostsLists from '../src/PostsData.json';
import { useEffect } from 'react';
import NavBar from './components/molecule/Navbar';
import Routing from './routing/Routing';
// import NavBar from './components/molecule/Navbar';

function App() {
  useEffect(() => {
      localStorage.setItem('posts', JSON.stringify(PostsLists))
  },[])
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routing/>
      </BrowserRouter>
    </>
  )
}

export default App
