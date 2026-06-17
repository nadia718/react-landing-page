import './App.css';
import Header from './header';
import Banner from './banner';
import Stats from './stats';
import About from './about';
import Features from './features';
import Services from './services';
import Testimonials from './testimonials';
import Faq from './faq';
import Cta from './cta';
import Contact from './contact';
import Footer from './footer';

function LandingApp() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Stats />
        <About />
        <Features />
        <Services />
        <Testimonials />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default LandingApp;
