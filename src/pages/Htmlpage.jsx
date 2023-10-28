import Data from '../data/data.json'
import Nav from '../components/Nav'
import Works from '../components/Works';
import Card from '../components/Work-card';
import Ellipse from '../components/Ellipse'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import arrowRight from '../img/arrow-rigth-black.svg'
import arrowLeft from '../img/arrow-left-black.svg'


const Htmlpage = () => {

  const html = Data.filter((item) => (item.categories === 'html'))

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
            {/* <Card className={'work__one card'} src={dupper} description={'html + css'} notes={'(адаптив)'} href={'https://chaooohs-dupper-bully.netlify.app/'} />
            <Card className={'work__two card'} src={resume} description={'html + css'} notes={'(адаптив)'} href={'https://chaooohs-resume.netlify.app/'} />
            <Card className={'work__three card'} src={bikcraft} description={'html + css'} notes={'(адаптив)'} href={'https://chaooohs-bikcraft.netlify.app/'} />
            <Card className={'work__four card'} src={work6} description={'html + css'} notes={'(адаптив)'} href={'https://chaooohs-homework-6.netlify.app/'} />
            <Card className={'work__five card'} src={orno} description={'html + css'} notes={'(адаптив)'} href={'https://chaooohs-orno.netlify.app/'} />
            <Card className={'work__six card'} src={infinizai} description={'html + css'} notes={'(адаптив)'} href={'https://chaooohs-infinizai.netlify.app/'} /> */}
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