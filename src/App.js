import './App.css';
import Home from './pages/Home/Home';
import {Routes , Route , Link} from 'react-router-dom'
import Single from './pages/Single/Single';
import Search from './components/Searchbar/Search';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { ContactPage } from './pages/ContactPage/ContactPage';
import Admin from './pages/Admin/Admin';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {Context} from '../src/context/Context'
import { useContext, useEffect, useState } from 'react';
import EditBlog from './pages/EditBlog/EditBlog';
import EditPost from './pages/Admin/EditPost';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  const {admin} = useContext(Context)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

useEffect(() => {
    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
}, [windowSize,[]])


console.log(windowSize)
  return (
    <div >
        <Search/>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home  windowSize={windowSize}/>}/>
        <Route path="/pcs/:id" element={<Single/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<About/>}/>
        
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
        {admin&&<Route path="/admin" element={<Admin/>}/>}
        {admin&&<Route path="/admin/edit/:id" element={<EditPost/>}/>}
       {admin&& <Route path="/register" element={<Register/>}/>}
        {admin&&<Route path="/edit/:id" element={<EditBlog/>}/>}
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
