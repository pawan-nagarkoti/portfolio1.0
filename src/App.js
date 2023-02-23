import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import About from './component/about/About';
import Skill from './component/Skill/Skill';
import Service from './component/service/Service';
import Contact from './component/contact/Contact';
import Project from './component/Project/Project';
import Scroll from './component/scroll/Scroll';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skill />
        <Service />
        <Project />
        <Contact />
      </main>
      <Scroll/>
    </>
  );
}

export default App;
