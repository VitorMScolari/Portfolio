
function Skills() {
    
    return (

        <>
            <div className='skills-about' id='about'>
                ABOUT
            </div>

            <div className='skills-wrapper' id='skills'>

                <div className='profile_img_wrapper'>
                    <img src={require('../images/profile_2.jpg')} alt='' className='profile__img'></img>

                    <center><h1>Who am I?</h1></center>
                    <span className='profile_span'>
                        <p>
                            Mechanical Engineering background, poker player and full-stack dev.
                        </p>
                        <p>
                            I´m passionate about Artificial Intelligence, physics and philosophy.
                        </p>
                    </span>

                </div>

                <div class="flex bars-wrap" data-animation="slide-in-right">
                    <div className='skills'>
                        Skills
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '85%'}}>
                            <div class="tag bold flex">CSS</div>
                        </div>
                        <span>85%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '90%'}}>
                            <div class="tag bold flex">HTML</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '90%'}}>
                            <div class="tag bold flex">JavaScript</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '70%'}}>
                            <div class="tag bold flex">React</div>
                        </div>
                        <span>70%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '70%'}}>
                            <div class="tag bold flex">Node.js</div>
                        </div>
                        <span>70%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '90%'}}>
                            <div class="tag bold flex">Python</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '80%'}}>
                            <div class="tag bold flex">Flask</div>
                        </div>
                        <span>80%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '85%'}}>
                            <div class="tag bold flex">SQL</div>
                        </div>
                        <span>85%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '90%'}}>
                            <div class="tag bold flex">Pandas</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '90%'}}>
                            <div class="tag bold flex">Numpy</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '90%'}}>
                            <div class="tag bold flex">SkLearn</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '90%'}}>
                            <div class="tag bold flex">NetworkX-PyVis</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '40%'}}>
                            <div class="tag bold flex">C++</div>
                        </div>
                        <span>40%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '30%'}}>
                            <div class="tag bold flex">Solidity</div>
                        </div>
                        <span>30%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style={{width: '30%'}}>
                            <div class="tag bold flex">TypeScript</div>
                        </div>
                        <span>30%</span>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Skills