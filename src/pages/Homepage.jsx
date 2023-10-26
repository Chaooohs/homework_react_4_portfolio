import Ellipse from '../components/Ellipse'
import Nav from '../components/Nav'

import image1 from '../img/image1.png'
import image2 from '../img/image2.png'
import image3 from '../img/image3.png'
import image4 from '../img/image4.png'
import image5 from '../img/image5.png'
import arrowRight from '../img/arrow-rigth-black.svg'

const Homepage = () => {

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
            <a href='#!' className='somework__one'>
              <img src={image1} alt='work one'></img>
            </a>
            <a href='#!' className='somework__two'>
              <img src={image2} alt='work one'></img>
            </a>
            <a href='#!' className='somework__three'>
              <img src={image3} alt='work one'></img>
            </a>
            <div className='somework__four text_md'>
              The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists.
            </div>
            <a href='#!' className='somework__five'>
              <img src={image4} alt='work one'></img>
            </a>
            <div className='somework__six text_md'>
              he Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles.[1] Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.
            </div>
            <a href='#!' className='somework__seven'>
              <img src={image5} alt='work one'></img>
            </a>
          </div>
        </div>
      </main>

      <Ellipse text={`html + css`} icon={arrowRight} data="next" />
    </>
  )
}

export default Homepage