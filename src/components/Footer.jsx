import smile from '../img/smile.svg'
import arrow from '../img/footer-arrow.svg'
import up from '../img/up.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="wrap">
          <div className="footer__left">
            <img className='footer__smile' src={smile} alt="smile"></img>
            <a className='footer__text text_md' href='mailto:01nikka01@gmail.com'>01nikka01@gmail.com</a>
          </div>
          <ul className='footer__right'>
            <li className='footer__item'>
              <a className='footer__text text_md' href='http://surl.li/mlnvj'>linkedin
                <img className='footer__arrow' src={arrow} alt="arrow"></img>
              </a>
            </li>
            <li className='footer__item'>
              <a className='footer__text text_md' href='https://github.com/Chaooohs'>github
                <img className='footer__arrow' src={arrow} alt="arrow"></img>
              </a>
            </li>
            <li>
              <a className='footer__up' href='#up'>
                <img src={up} alt="up"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer