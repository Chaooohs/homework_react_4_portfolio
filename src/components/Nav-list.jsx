import { Link } from 'react-router-dom'

const NavList = ({ onCloseList }) => {
  return (
    <div className='list' onClick={onCloseList}>
        <Link to="/" className='list__item'>
          <span className='list__link text_md'>
            home
          </span>
        </Link>
        <Link to="/Html" className='list__item'>
          <span className='list__link text_md'>
            html + css
          </span>
        </Link>
        <Link to="/Js" className='list__item'>
          <span className='list__link text_md'>
            js
          </span>
        </Link>
        <Link to="/React" className='list__item'>
          <span className='list__link text_md'>
            react
          </span>
        </Link>
    </div>
  )
}

export default NavList