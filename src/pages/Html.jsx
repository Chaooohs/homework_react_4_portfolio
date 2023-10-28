import Nav from '../components/Nav'
import Works from '../components/Works';
import Ellipse from '../components/Ellipse'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import arrowRight from '../img/arrow-rigth-black.svg'
import arrowLeft from '../img/arrow-left-black.svg'

const Htmlpage = ({data}) => {

  console.log(data)

  const html = data.filter((item) => (item.categories === 'html'))

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const navigateToPrevHandler = () => navigate('/')
  const navigateToNextHandler = () => navigate('/Js')

  return (
    <>
      <Nav />

      <div className="wrap" id='up'>
        <h1 className='title text_lg'>
          Vincent Van Gogh. post-impressionist painter and artist
        </h1>
      </div>

      <main>
        <div className="wrap">
          <div className='work grid'>
            <Works works={html} />
          </div>
        </div>
      </main>
      
      <div className="wrap">
        <Ellipse onNavigateTo={navigateToPrevHandler} text={`Home`} icon={arrowLeft} data="prev" />
        <Ellipse onNavigateTo={navigateToNextHandler} text={`Js`} icon={arrowRight} data="next" />
      </div>
    </>
  )
}

export default Htmlpage