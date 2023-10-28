import Nav from '../components/Nav'
import Works from '../components/Works';
import Ellipse from '../components/Ellipse'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

// import image1 from '../img/image6.png'
// import image2 from '../img/image7.png'
// import image3 from '../img/image8.png'
// import image5 from '../img/image10.png'
// import image6 from '../img/image11.png'
import arrowRight from '../img/arrow-rigth-black.svg'
import arrowLeft from '../img/arrow-left-black.svg'

const Htmlpage = () => {

  // console.log(data)

  // const html = data.filter((item) => (item.categories === 'js'))

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
            {/* <WorkCard className={'work__one card'} src={image1} description={'The Starry Night'} notes={'(адаптив)'} href={'#!'} />
            <WorkCard className={'work__two card'} src={image2} description={'The Night Café'} notes={'(адаптив)'} href={'#!'} />
            <WorkCard className={'work__three card'} src={image3} description={'The Red Vineyard'} notes={'(адаптив)'} href={''} />
            <WorkCard className={'work__four card'} src={electro} description={'Ward in the Hospital in Arles'} notes={'(адаптив)'} href={'https://chaooohs-my-electro.netlify.app/'} />
            <WorkCard className={'work__five card'} src={image5} description={'Ploughman in the Fields near Arles'} notes={'(адаптив)'} href={'#!'} />
            <WorkCard className={'work__six card'} src={image6} description={'Paul Gauguins Armchair'} notes={'(адаптив)'} href={'#!'} /> */}
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

export default Htmlpage