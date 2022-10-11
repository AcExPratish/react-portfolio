import './App.scss';
import Project from './modules/project/Project';
import Home from './modules/home/Home';
import Blog from './modules/blogs/Blog';
import Contact from './modules/contact/Contact';

function App() {
  return (
    <>
      <Home />
      <Project />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
