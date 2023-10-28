import Nav from '../components/Nav'
import Works from '../components/Works';
import Ellipse from '../components/Ellipse'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import arrowRight from '../img/arrow-rigth-black.svg'
import arrowLeft from '../img/arrow-left-black.svg'

const JsPage = ({ data }) => {

  const js = data.filter((item) => (item.categories === 'js'))

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const navigateToPrevHandler = () => navigate('/Html')
  const navigateToNextHandler = () => navigate('/React')

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
            <Works works={js} />
          </div>
        </div>
      </main>

      <div className="wrap">
        <Ellipse onNavigateTo={navigateToPrevHandler} text={`Html + Css`} icon={arrowLeft} data="prev" />
        <Ellipse onNavigateTo={navigateToNextHandler} text={`React`} icon={arrowRight} data="next" />
      </div>
    </>
  )
}

export default JsPage