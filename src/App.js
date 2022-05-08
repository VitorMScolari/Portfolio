import './App.css';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Certificates from './components/Certificates.js'
import Contact from './components/Contact.js'
import Skills from './components/Skills.js'


function App() {

  return (
    <div className='App'>

      <div className='intro-bg-img'>
        <Header />
      </div>

      {/* Canvas element will go here */}
      <div className='intro-animation'>
        <div>
          <center>
            <span>
              I´m Vitor, Full-Stack dev<br/>
              VMS_CODE on Twitch and YouTube
            </span>
          </center>
        </div>
      </div>

      <section className='my-work' id='work'>
        <h2 className='section__title section__title--work'>My Work</h2>
        <p className='section_subtitle'>A selection of my range of work</p>

        <div className='portfolio'>
          <a href='#skills' className='portfolio__item'>
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

      <Skills />
      
      <Contact />

      <Footer />



    </div>
  );
}

export default App;
