import './App.css';
import Project from './modules/project/Project';
import Footer from './modules/footer/Footer';
import Home from './modules/home/Home';
import Blog from './modules/blogs/Blog';
import Navbar from './modules/navbar/Navbar';

function App() {
  return (
    <>
      <Home/>
      {/* <Navbar/> */}
      <Project/>
      <Blog/>
    </>
  );
}

export default App;
