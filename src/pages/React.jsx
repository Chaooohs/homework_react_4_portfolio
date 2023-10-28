import Nav from '../components/Nav'
import Ellipse from '../components/Ellipse'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import image1 from '../img/image6.png'
import image3 from '../img/image8.png'
import image4 from '../img/image9.png'
import image5 from '../img/image10.png'
import image6 from '../img/image11.png'
import arrowRight from '../img/arrow-rigth-black.svg'
import arrowLeft from '../img/arrow-left-black.svg'

const Htmlpage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const navigateToPrevHandler = () => navigate('/Js')
  const navigateToNextHandler = () => navigate('/')



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
            {/* <WorkCard className={'work__one card'} src={image1} description={'The Starry Night'} notes={'(адаптив)'} href={'#!'} />
            <WorkCard className={'work__two card'} src={todo} description={'Shopping list (todo)'} notes={'(адаптив)'} href={'https://chaooohs-shopping-list.netlify.app/'} />
            <WorkCard className={'work__three card'} src={image3} description={'The Red Vineyard'} notes={'(адаптив)'} href={'#!'} />
            <WorkCard className={'work__four card'} src={image4} description={'Ward in the Hospital in Arles'} notes={'(адаптив)'} href={'#!'} />
            <WorkCard className={'work__five card'} src={image5} description={'Ploughman in the Fields near Arles'} notes={'(адаптив)'} href={'#!'} />
            <WorkCard className={'work__six card'} src={image6} description={'Paul Gauguins Armchair'} notes={'(адаптив)'} href={'#!'} /> */}
          </div>
        </div>
      </main>

      <div className="wrap">
        <Ellipse onNavigateTo={navigateToPrevHandler} text={`Js`} icon={arrowLeft} data="prev" />
        <Ellipse onNavigateTo={navigateToNextHandler} text={`Home`} icon={arrowRight} data="next" />
      </div>
    </>
  )
}

export default Htmlpage