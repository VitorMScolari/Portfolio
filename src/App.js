import './App.css';
import Footer from './components/footer.js'
import Header from './components/header.js'

function App() {

  return (
    <div className='App'>

      <Header />

      <section className='intro' id='home'>
        <h1 className='section__title section__title--intro'>
          Hi, I am <strong>Vitor Scolari</strong>
        </h1>
        <p className='section__subtitle section_subtitle--intro'>full-stack dev</p>
        <img src={require('./images/profile_2.jpg')} alt='a picture of Vitor Scolari' className='intro__img'></img>  
      </section>


      <section className='my-services' id='services'>
        <h2 className='section__title section__title--services'>What I do</h2>
        <div className='services'>
          <h3>React + Jinja2 + Django Web Development</h3>
          <p>Developed 10 sites using python templates for the backend or using ReactJS and NodeJS with SQL Database
            Integration.
          </p>
        </div>

        <div className='service'>
          <h3>Data Analysis and A.I</h3>
          <p>Completed all available courses on Kaggle and participated in 10 machine learning competitions
            placing top 20 in 4 of them.
          </p>
        </div>  

        <div className='service'>
          <h3>Blockchain Development</h3>
          <p>Built my own web 3.0 application and created flash loan trading bots</p>
        </div> 


        <a href='#work' className='btn'>My Work</a>
      </section>

      <section className='about-me' id='about'>
        <h2 className='section__title section__title--about'>Who I am</h2>
        <p className='section__subtitle section_subtitle--about'>fsmdolkifsfmsldkmfkdsmf</p>


        <div className='about-me__body'>
          <p>asdosajdisajn</p>
          <p>jsadosujnadondsons</p>
        </div>

        <img src={require('./images/profile_1.PNG')} alt='' className='about-me__img'></img>
      </section>

      <section className='my-work' id='work'>
        <h2 className='section__title section__title--work'>My Work</h2>
        <p className='section_subtitle'>A selection of my range of work</p>

        <div className='portfolio'>
          <a href='#' className='portfolio__item'>
            <img src='' alt='' class='portfolio__img'></img>
          </a>

          <a href='#' className='portfolio__item'>
            <img src='' alt='' class='portfolio__img'></img>
          </a>

          <a href='#' className='portfolio__item'>
            <img src='' alt='' class='portfolio__img'></img>
          </a>

          <a href='#' className='portfolio__item'>
            <img src='' alt='' class='portfolio__img'></img>
          </a>

          <a href='#' className='portfolio__item'>
            <img src='' alt='' class='portfolio__img'></img>
          </a>

        </div>
      </section>

      <Footer />



    </div>
  );
}

export default App;
