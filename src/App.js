
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/NavBar';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <FAQ />
      <Contact />
    </div>
  );
};

export default App;
