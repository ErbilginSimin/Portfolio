import './Summer.scss';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import About from '../About/About';
import SeasonMenu from '../SeasonMenu/SeasonMenu';

function Summer() {
  return (
    <div id="Summer" className="relative w-full min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow mt-5">
        {/* <Intro /> */}
        {/* <Skills /> */}
        {/* <About /> */}
        {/* <SeasonMenu /> */}
      </main>
      <Footer />
    </div>
  );
}

export default Summer;
