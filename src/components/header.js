function Header() {

    function handleClick() {
        document.body.classList.toggle('nav-open');
    }

    function removeOpen() {
        document.body.classList.remove('nav-open');
    }
    
    return (
        <header>
            <div className='logo'>
            <img src='' alt=""></img>
            </div>
            <button className='nav-toggle' aria-label='toggle navigation' onClick={handleClick}>
            <span className='hamburger'></span>
            </button>
            <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><a href='#home' className='nav__link' onClick={removeOpen}>Home</a></li>
                <li className='nav__item'><a href='#services' className='nav__link' onClick={removeOpen}>My Services</a></li>
                <li className='nav__item'><a href='#about' className='nav__link' onClick={removeOpen}>About me</a></li>
                <li className='nav__item'><a href='#work' className='nav__link' onClick={removeOpen}>My Work</a></li>
            </ul>
            </nav>
        </header>
    )
}


export default Header