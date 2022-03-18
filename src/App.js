import './App.css';
import Footer from './components/footer.js'
import Header from './components/header.js'

function App() {

  return (
    <div className='App'>
      <div className='intro-bg-img'>
        <Header />

        <section className='intro' id='home'>
          <h1 className='section__title section__title--intro'>
            Hi, I am <strong>Vitor Scolari</strong>
          </h1>
          <p className='section__subtitle section_subtitle--intro'>full-stack dev</p>
          <img src={require('./images/profile_2.jpg')} className='intro__img'></img>  
        </section>
      </div>


      <section className='my-services' id='services'>

        <a href='#work' className='btn'>My Work</a>
      </section>

      <section className='about-me' id='about'>
        <h2 className='section__title section__title--about'>Who I am</h2>
          <p>
            My main long-term focus is on building harmonic systems that are holistically integrated
          </p>
          <p>
            lowering the risks that come with the growth of technology
          </p>

      </section>

      <section className='my-work' id='work'>
        <h2 className='section__title section__title--work'>My Work</h2>
        <p className='section_subtitle'>A selection of my range of work</p>

        <div className='portfolio'>
          <a href='#' className='portfolio__item'>
            <img src={require('./gifs/ScriptVis_flask_1.gif')} alt='' class='portfolio__img'></img>
          </a>

          <img src={require('./gifs/ScriptVis_flask_2.gif')} alt='' class='portfolio__img'></img>

          <img src={require('./gifs/ScriptVis_flask_3.gif')} alt='' class='portfolio__img'></img>

          <a href='https://domain-service-buildspace.vercel.app/' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/domain_service_Buildspace.gif')} alt='' class='portfolio__img'></img>
          </a>

          <img src={require('./gifs/GoogleKeep_simple.gif')} alt='' class='portfolio__img'></img>

          <img src={require('./gifs/HackerNews_simple.gif')} alt='' class='portfolio__img'></img>

          <img src={require('./gifs/TicTacToe_simple.gif')} alt='' class='portfolio__img'></img>

          <a href='https://www.twitch.tv/vms_code' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/twitch_buildspace.gif')} alt='' class='portfolio__img'></img>
          </a>

          <a href='https://www.twitch.tv/vms_code' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/twitch_cpp.gif')} alt='' class='portfolio__img'></img>
          </a>

          <a href='https://www.twitch.tv/vms_code' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/twitch_docs.gif')} alt='' class='portfolio__img'></img>
          </a>

          <a href='https://www.twitch.tv/vms_code' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/twitch_flask.gif')} alt='' class='portfolio__img'></img>
          </a>

          <a href='https://www.youtube.com/channel/UCQesLcw80vA6AGvM_cP-MyA/videos' target='_blank' rel='noreferrer noopener' className='portfolio__item'>
            <img src={require('./gifs/youtube_channel.gif')} alt='' class='portfolio__img'></img>
          </a>


        </div>
      </section>

      <Footer />



    </div>
  );
}

export default App;
