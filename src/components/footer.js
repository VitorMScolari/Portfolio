
function Footer() {
    
    return (
    <footer className='footer'>
        <a href='vms.fit@hotmail.com' className='footer__link'>vms.fit@hotmail.com</a>
        <ul className='social-list'>
          <li className='social-list__item'>
            <a className='social-list__link' target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/channel/UCQesLcw80vA6AGvM_cP-MyA/featured'><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li className='social-list__item'>
            <a className='social-list__link' target='_blank' rel='noopener noreferrer' href='https://www.twitch.tv/vms_code'><i class="fa-brands fa-twitch"></i></a>
          </li>
          <li className='social-list__item'>
            <a className='social-list__link' target='_blank' rel='noopener noreferrer' href='https://github.com/VitorMScolari'><i class="fa-brands fa-github"></i></a>
          </li>
        </ul>
      </footer>
    )
}


export default Footer