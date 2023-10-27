import Nav from '../components/Nav'
import Ellipse from '../components/Ellipse'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import image1 from '../img/image6.png'
import image2 from '../img/image7.png'
import image3 from '../img/image8.png'
import image4 from '../img/image9.png'
import image5 from '../img/image10.png'
import image6 from '../img/image11.png'
import arrowRight from '../img/arrow-rigth-black.svg'
import arrowWhite from '../img/arrow-rigth-white.svg'

const Htmlpage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const navigateToHandler = () => navigate('/')



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
            <a href='#!' className='work__one'>
              <img src={image1} alt='work one'></img>
              <div className='description text_sm'>
                <span>The Starry Night</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
            <a href='#!' className='work__two'>
              <img src={image2} alt='work one'></img>
              <div className='description text_sm'>
                <span>The Night Café</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
            <a href='#!' className='work__three'>
              <img src={image3} alt='work one'></img>
              <div className='description text_sm'>
                <span>The Red Vineyard</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
            <a href='#!' className='work__four'>
              <img src={image4} alt='work one'></img>
              <div className='description text_sm'>
                <span>Ward in the Hospital in Arles</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
            <a href='#!' className='work__five'>
              <img src={image5} alt='work one'></img>
              <div className='description text_sm'>
                <span>Ploughman in the Fields near Arles</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
            <a href='#!' className='work__six'>
              <img src={image6} alt='work one'></img>
              <div className='description text_sm'>
                <span>Paul Gauguin's Armchair</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Ellipse onNavigateTo={navigateToHandler} text={`js`} icon={arrowRight} data="next" />
    </>
  )
}

export default Htmlpage