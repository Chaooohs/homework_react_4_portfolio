import Nav from '../components/Nav'
import Works from '../components/Works';
import Ellipse from '../components/Ellipse'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import arrowRight from '../img/arrow-rigth-black.svg'
import arrowLeft from '../img/arrow-left-black.svg'

const ReactPage = ({ data }) => {

  const react = data.filter((item) => (item.categories === 'react'))

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const navigateToPrevHandler = () => navigate('/Js')
  const navigateToNextHandler = () => navigate('/')

  return (
    <>
      <div className="wrap" id='up'>
        <h1 className='title text_lg'>
          Vincent Van Gogh. post-impressionist painter and artist
        </h1>
      </div>

      <main>
        <div className="wrap">
          <div className='layout grid'>
            <Works works={react} />
          </div>
        </div>
      </main>

      <div className="wrap">
        <Ellipse onNavigateTo={navigateToPrevHandler} text={`Js`} icon={arrowLeft} data="prev" />
        <Ellipse onNavigateTo={navigateToNextHandler} text={`Main`} icon={arrowRight} data="next" />
      </div>
    </>
  )
}

export default ReactPage