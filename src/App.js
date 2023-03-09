import './App.scss';
import Project from './modules/project/Project';
import Navbar from './modules/navbar/Navbar';
import Blog from './modules/blogs/Blog';
import Contact from './modules/contact/Contact';
import Home from './modules/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Project />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
