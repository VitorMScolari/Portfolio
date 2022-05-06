import './App.css';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Canvas from './components/Canvas.js'
import Contact from './components/Contact.js'

function App() {


  return (
    <div className='App'>
      <div className='intro-bg-img'>
        <Header />
      </div>


      <section className='about-me' id='about'>
        <h2 className='section__title section__title--about'>Who I am</h2>
          <p>
            I´m a self-taught full-stack developer with a passion for Artificial Intelligence and Consciousness.
          </p>
          <p>
            I have a background in Mechanical Engineering and I´m also interested in physics and philosophy.
          </p>

      </section>

      <section className='my-work' id='work'>
        <h2 className='section__title section__title--work'>My Work</h2>
        <p className='section_subtitle'>A selection of my range of work</p>

        <div className='portfolio'>
          <a href='#' className='portfolio__item'>
            <img src={require('./gifs/ScriptVis_flask_1.gif')} alt='' className='portfolio__img'></img>
          </a>

          <img src={require('./gifs/ScriptVis_flask_2.gif')} alt='' className='portfolio__img'></img>

          <img src={require('./gifs/ScriptVis_flask_3.gif')} alt='' className='portfolio__img'></img>

          <a href='https://domain-service-buildspace.vercel.app/' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/domain_service_Buildspace.gif')} alt='' class='portfolio__img'></img>
          </a>

          <img src={require('./gifs/GoogleKeep_simple.gif')} alt='' className='portfolio__img'></img>

          <img src={require('./gifs/HackerNews_simple.gif')} alt='' className='portfolio__img'></img>

          <img src={require('./gifs/TicTacToe_simple.gif')} alt='' className='portfolio__img'></img>

          <a href='https://www.twitch.tv/vms_code' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/twitch_buildspace.gif')} alt='' className='portfolio__img'></img>
          </a>

          <a href='https://www.twitch.tv/vms_code' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/twitch_cpp.gif')} alt='' className='portfolio__img'></img>
          </a>

          <a href='https://www.twitch.tv/vms_code' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/twitch_docs.gif')} alt='' className='portfolio__img'></img>
          </a>

          <a href='https://www.twitch.tv/vms_code' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/twitch_flask.gif')} alt='' className='portfolio__img'></img>
          </a>

          <a href='https://www.youtube.com/channel/UCQesLcw80vA6AGvM_cP-MyA/videos' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/youtube_channel.gif')} alt='' className='portfolio__img'></img>
          </a>


        </div>
      </section>

      <Contact />

      <Footer />



    </div>
  );
}

export default App;
