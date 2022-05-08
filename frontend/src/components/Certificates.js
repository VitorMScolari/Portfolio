function Certificates() {

    const fcc = [
        'Data Analysis with Python_Oct_20_2021.PNG',
        'Data Visualization_July_25_2021.PNG',
        'Front End Development Libraries_July_19_2021.PNG',
        'JavaScript Algorithms and Data Structures_Feb_01_2021.PNG',
        'Responsive Web Design_Jan_28_2021.PNG',
        'Scientific Computing with Python_Oct_11_2021.PNG',
    ]

    const fccCert = fcc.map((cert, index) => {
        return (
            <div className="cert-fcc-img" key={index}>
                <img src={require(`../images/Certificates/FCC Certificates/${cert}`)} alt='fcc' className='fcc-img'></img>
            </div>
        )
    })

    const kaggle = [
        'kaggle_computer_vision.PNG',
        'kaggle_data_cleaning.PNG',
        'kaggle_data_visualization.PNG',
        'kaggle_feature_engineering.PNG',
        'kaggle_intermediate_machine_learning.PNG',
        'kaggle_intro_to_AI_ethics.PNG',
        'kaggle_intro_to_deep_learning.PNG',
        'kaggle_intro_to_game_AI_and_reinforcement_learning.PNG',
        'kaggle_intro_to_machine_learning.PNG',
        'kaggle_pandas.PNG'
    ]

    const kaggleCert = kaggle.map((cert, index) => {
        return (
            <div className="cert-kaggle-img" key={index}>
                <img src={require(`../images/Certificates/Kaggle Certificates/${cert}`)} alt='kaggle' className='kaggle-img'></img>
            </div>
        )
    })

    const ztm = [
        'certificate-of-completion-for-advanced-javascript-concepts.png',
        'certificate-of-completion-for-complete-ethical-hacking-bootcamp-2021-zero-to-mastery.png',
        'certificate-of-completion-for-complete-guide-to-freelancing-in-2021-zero-to-mastery.png',
        'certificate-of-completion-for-complete-nodejs-bootcamp-zero-to-mastery.png',
        'certificate-of-completion-for-complete-react-developer-in-2020-w-redux-hooks-graphql-zero-to-mastery.png',
        'certificate-of-completion-for-complete-react-native-developer-in-2021-zero-to-mastery.png',
        'certificate-of-completion-for-complete-sql-databases-bootcamp-zero-to-mastery.png',
        'certificate-of-completion-for-complete-vue-developer-in-2021-w-vuex-composition-api-router.png',
        'certificate-of-completion-for-deno-the-complete-guide-zero-to-mastery.png',
        'certificate-of-completion-for-devops-bootcamp-linux-sysadmin-from-scratch.png',
        'certificate-of-completion-for-go-programming-golang-the-complete-developer-s-guide.png',
        'certificate-of-completion-for-master-the-coding-interview-big-tech-faang-interviews.png',
        'certificate-of-completion-for-master-the-coding-interview-data-structures-algorithms.png',
        'certificate-of-completion-for-rust-programming-the-complete-developer-s-guide.png',
        'certificate-of-completion-for-seo-fundamentals-keyword-research-content-optimization.png',
        'certificate-of-completion-for-tensorflow-developer-certificate-in-2021-zero-to-mastery.png',
        'certificate-of-completion-for-typescript-the-complete-developer-s-guide.png',
        'certificate-of-completion-for-web-security-bug-bounty-learn-penetration-testing-in-2021.png',
        'certificate-of-completion-for-webassembly.png'
    ]

    const ztmCert = ztm.map((cert, index) => {
        return (
            <div className="cert-ztm-img" key={index}>
                <img src={require(`../images/Certificates/ZTM/${cert}`)} alt='ztm' className='ztm-img'></img>
            </div>
        )
    })

    const udemy = [
        'numpy - udemy.jpg',
        'sololearn_cpp.png',
        'sololearn_react_redux.png',
        'Udemy - Django with React.png'
    ]

    const udemyCert = udemy.map((cert, index) => {
        return (
            <div className="cert-udemy-img" key={index}>
                <img src={require(`../images/Certificates/udemy/${cert}`)} alt='udemy' className='udemy-img'></img>
            </div>
        )
    })

    
    return (
        <div className="certificates" id="certificates">
            <div className="certificates-desc">
                <span>Certificates</span>
            </div>
            <div className="cert-fcc">
                <span>
                    Free Code Camp
                </span>
                <div className="fcc">
                    {fccCert}
                </div>
            </div>

            <div className="cert-kaggle">
                <span>
                    Kaggle
                </span>
                <div className="kaggle">
                    {kaggleCert}
                </div>
            </div>

            <div className="cert-ztm">
                <span>
                    Zero to Mastery
                </span>
                <div className="ztm">
                    {ztmCert}
                </div>
            </div>

            <div className="cert-udemy">
                <span>
                    Udemy and others
                </span>
                <div className="udemy">
                    {udemyCert}
                </div>
            </div>

        </div>
    )
}


export default Certificates
