import './Summer.scss';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import About from '../About/About';
import SeasonMenu from '../SeasonMenu/SeasonMenu';

function Default() {
  return (
    <section id="Summer" className="relative w-full min-h-screen flex flex-col justify-between">
      
        <Header />
        <SeasonMenu />
        <Intro />
      <div className="Content z-10 flex flex-col flex-grow">
        <Skills />
        <About />
        

      </div>
      <Footer />
    </section>
  );
}

export default Default;
