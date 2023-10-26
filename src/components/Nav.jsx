import Burger from './Nav-burger';
import NavList from './Nav-list';

const el = (selector) => document.querySelector(selector);

const Nav = () => {

  const openMenuHandler = () => {
    el('.burger').classList.toggle('active')
    el('.list').classList.toggle('active')
  }

  return (
    <div className='nav wrap'>
      <NavList />
      <Burger onOpenMenu={openMenuHandler} />
    </div>
  )
}

export default Nav