import '../index.css'
import Nav from '../components/Nav'
import Ellipse from '../components/Ellipse'
import Footer from '../components/Footer'

import arrowRight from '../img/arrow-rigth-black.svg'

const Htmlpage = () => {
  return (
    <div className='page'>
      <Nav />
      <main>
        <div></div>
      </main>
      <Ellipse text={`js`} icon={arrowRight} data="next" />
      <Footer/>
    </div>
  )
}

export default Htmlpage