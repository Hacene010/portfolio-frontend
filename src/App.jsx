import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/AboutMe/AboutMe';
import Career from './components/Career/Career';
import Achievments from './components/Achievments/Achievments';
import Contact from './components/Contact/Contact';
import SApp from './Style';

function App() {
  return (
    <SApp className="App">
      <Header />
      <Home />
      <Career />
      <About />
      <Achievments />
      <Contact />
    </SApp>
  );
}

export default App;
