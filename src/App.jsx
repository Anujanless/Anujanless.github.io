import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import NavBar from './components/Navbar'; 
import Experiences from './components/Experiences';
import Carousel from './components/Carousel';
import About from './components/About';
import Footer from './components/Footer';
import ScrollAnimationWrapper from './components/ScrollAnimationWrapper'; // Import Scroll Animation Wrapper

function App() {
  const slides = [
    "https://static.vecteezy.com/system/resources/previews/003/582/701/non_2x/coming-soon-background-illustration-template-design-free-vector.jpg",
  ];

  return (
    <>
      {/* Background */}
      <div className="w-full min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] fixed top-0 left-0 z-[-10]"></div>

      {/* Components */}
      <div>
        <NavBar />
        <Hero />
        
        {/* Wrapping About and Experiences with scroll animation */}
        <ScrollAnimationWrapper triggerOnce={true}>
          <About />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper triggerOnce={true}>
          <Experiences />
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper triggerOnce={true}>
        <div className="w-[80%] m-auto pt-11">
          <Carousel slides={slides} />
        </div>
        </ScrollAnimationWrapper>    
        <Footer />
      </div>
    </>
  );
}

export default App;