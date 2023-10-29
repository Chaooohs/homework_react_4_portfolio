import Nav from '../components/Nav'
import Works from '../components/Works';
import Ellipse from '../components/Ellipse'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import image2 from '../img/image2.png'
import arrowRight from '../img/arrow-rigth-black.svg'
import arrowLeft from '../img/arrow-left-black.svg'

const MainPage = ({ data }) => {

  const main = data.filter((item) => (item.categories === 'main'))

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const navigateToPrevHandler = () => navigate('/React');
  const navigateToNextHandler = () => navigate('/Html');

  return (
    <>
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
          <div className='layout grid'>
            <Works works={main} />
            <img className='layout__one' src={image2} alt="img"></img>
            <div className='layout__two text_md'>
              The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists.
            </div>
            <div className='layout__three text_md'>
              he Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles.[1] Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.
            </div>
          </div>
        </div>
      </main>

      <div className="wrap">
        <Ellipse onNavigateTo={navigateToPrevHandler} text={`React`} icon={arrowLeft} data="prev" />
        <Ellipse onNavigateTo={navigateToNextHandler} text={`html`} icon={arrowRight} data="next" />
      </div>
    </>
  )
}

export default MainPage