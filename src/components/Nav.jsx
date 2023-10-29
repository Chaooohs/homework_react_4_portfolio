import Burger from './Nav-burger';
import NavList from './Nav-list';

const el = (selector) => document.querySelector(selector);

const Nav = () => {

  const openMenuHandler = () => {
    el('.burger').classList.toggle('active')
    el('.list').classList.toggle('active')
  }

  const closeListHandler = (e) => {
     if (e.target.closest('.list__item')) openMenuHandler()
  }

  return (
    <div className='nav wrap'>
      <NavList onCloseList={closeListHandler} />
      <Burger onOpenMenu={openMenuHandler} />
    </div>
  )
}

export default Nav