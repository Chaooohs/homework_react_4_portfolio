import Nav from '../components/Nav'
import Ellipse from '../components/Ellipse'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import image2 from '../img/image2.png'
import arrowRight from '../img/arrow-rigth-black.svg'
import arrowLeft from '../img/arrow-left-black.svg'

const HomePage = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const navigateToPrevHandler = () => navigate('/React');
  const navigateToNextHandler = () => navigate('/Html');

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

            {/* <WorkCard className={'somework__one card'} src={store} description={'html + css + js'} notes={'(адаптив)'} href={'https://chaooohs-sport-if.netlify.app/'} />
            <WorkCard className={'somework__two card'} src={image2} description={''} notes={'(адаптив)'} href={''} />
            <WorkCard className={'somework__three card'} src={infinizai} description={'html + css'} notes={'(адаптив)'} href={'https://chaooohs-infinizai.netlify.app/'} /> */}

            <div className='somework__four text_md'>
              The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists.
            </div>

            {/* <WorkCard className={'somework__five card'} src={pizza} description={'html + css + js'} notes={'(адаптив)'} href={'https://chaooohs-pizza.netlify.app/'} /> */}

            <div className='somework__six text_md'>
              he Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles.[1] Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.
            </div>

            {/* <WorkCard className={'somework__seven card'} src={achille} description={'html + css + bootstrap'} notes={'(адаптив, сайт на 9 сторiнок)'} href={'https://chaooohs-achille-ciio.netlify.app/'} /> */}

          </div>
        </div>
      </main>

      <div className="wrap">
        <Ellipse onNavigateTo={navigateToPrevHandler} text={`React`} icon={arrowLeft} data="prev" />
        <Ellipse onNavigateTo={navigateToNextHandler} text={`html + css`} icon={arrowRight} data="next" />
      </div>
    </>
  )
}

export default HomePage