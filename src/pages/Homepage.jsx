import Nav from '../components/Nav'
import Ellipse from '../components/Ellipse'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import image1 from '../img/image1.png'
import image2 from '../img/image2.png'
import image3 from '../img/image3.png'
import image4 from '../img/image4.png'
import image5 from '../img/image5.png'
import arrowRight from '../img/arrow-rigth-black.svg'
import arrowWhite from '../img/arrow-rigth-white.svg'

const Homepage = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const navigateToHandler = () => navigate('/Html');

  return (
    <>
      <Nav />

      <header>
        <div className="header" id='up'>
          <h1 className='text_lg title-home'>
            I have tried to express the terrible passions of humanity by means of red and purple
          </h1>
        </div>
      </header>

      <main>
        <div className="wrap">
          <div className='about grid'>
            <ul className='about__one opacity'>
              <li className='text_sm about__item'>
                <span>year</span>
              </li>
              <li className='text_sm about__item'>
                <span>mediun</span>
              </li>
              <li className='text_sm about__item'>
                <span>location</span>
              </li>
              <li className='text_sm about__item'>
                <span>size</span>
              </li>
            </ul>
            <ul className='about__two'>
              <li className='text_sm about__item'>
                <span>1888</span>
              </li>
              <li className='text_sm about__item'>
                <span>oil on canvas</span>
              </li>
              <li className='text_sm about__item'>
                <span>ayale university gallery</span>
              </li>
              <li className='text_sm about__item'>
                <span>28.5 in × 36.3 in</span>
              </li>
            </ul>
            <div className='text_sm about__three'>
              The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.
            </div>
            <div></div>
          </div>
        </div>

        <div className="wrap">
          <div className='somework grid'>
            <a className='somework__one card' target="_blank" href='https://chaooohs-sport-if.netlify.app/'>
              <img src={image1} alt='work one'></img>
              <div className='description text_md'>
                <span>html + css + js</span>
                <span className='notes'>(адаптив)</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
            <a href='#!' className='somework__two card'>
              <img src={image2} alt='work one'></img>
              <div className='description text_sm'>
                <span>The Starry Night</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
            <a href='#!' className='somework__three card'>
              <img src={image3} alt='work one'></img>
              <div className='description text_sm'>
                <span>The Starry Night</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
            <div className='somework__four text_md'>
              The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists.
            </div>
            <a className='somework__five card' target="_blank" href='https://chaooohs-pizza.netlify.app/'>
              <img src={image4} alt='work one'></img>
              <div className='description text_md'>
                <span>html + css + js</span>
                <span className='notes'>(drag & drop)</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
            <div className='somework__six text_md'>
              he Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles.[1] Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.
            </div>
            <a href='#!' className='somework__seven card'>
              <img src={image5} alt='work one'></img>
              <div className='description text_sm'>
                <span>The Starry Night</span>
                <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Ellipse onNavigateTo={navigateToHandler} text={`html + css`} icon={arrowRight} data="next" />
    </>
  )
}

export default Homepage