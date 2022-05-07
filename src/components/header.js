function Header() {
    
    return (
        <header>
            <nav className='nav'>
            <a href='#home' className='nav__link' >About</a>
            <a href='#work' className='nav__link' >My Work</a>
            <a href='#skills' className='nav__link' >Skills</a>
            <a href='#about' className='nav__link' >Contact me</a>
            <a href='https://www.upwork.com/freelancers/~01a65a08b537964f16?viewMode=1' target='_blank' rel="noreferrer noopener" className='nav__link'>Hire me</a>
        </nav>
        </header>
    )
}


export default Header