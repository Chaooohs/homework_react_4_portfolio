import { Link } from 'react-router-dom'

const NavList = () => {
  return (
    <ul className='list'>
      <li className='list__item'>
        <Link to="/">
          <span className='text_md'>
            home
          </span>
        </Link>
      </li>
      <li className='list__item'>
        <Link to="/Html">
          <span className='text_md'>
            html + css
          </span>
        </Link>
      </li>
      <li className='list__item'>
        <Link >
          <span className='text_md'>
            js
          </span>
        </Link>
      </li>
      <li className='list__item'>
        <Link >
          <span className='text_md'>
            react
          </span>
        </Link>
      </li>
    </ul>
  )
}

export default NavList