import Nav from '../components/Nav'
import Ellipse from '../components/Ellipse'

import image1 from '../img/image6.png'
import image2 from '../img/image7.png'
import image3 from '../img/image8.png'
import image4 from '../img/image9.png'
import image5 from '../img/image10.png'
import image6 from '../img/image11.png'
import arrowRight from '../img/arrow-rigth-black.svg'

const Htmlpage = () => {
  return (
    <>
      <Nav />

      <div className="wrap">
        <h1 className='title text_lg'>
          Vincent Van Gogh. post-impressionist painter and artist
        </h1>
      </div>

      <main>
        <div className="wrap">
          <div className='work grid'>
            <a href='#!' className='work__one'>
              <img src={image1} alt='work one'></img>
              <div className='text_md'>
              The Starry Night
              </div>
            </a>
            <a href='#!' className='work__two'>
              <img src={image2} alt='work one'></img>
              <div className='text_md'>
                The Night Café
              </div>
            </a>
            <a href='#!' className='work__three'>
              <img src={image3} alt='work one'></img>
              <div className='text_md'>
              The Red Vineyard
              </div>
            </a>
            <a href='#!' className='work__four'>
              <img src={image4} alt='work one'></img>
              <div className='text_md'>
              Ward in the Hospital in Arles
              </div>
            </a>
            <a href='#!' className='work__five'>
              <img src={image5} alt='work one'></img>
              <div className='text_md'>
              Ploughman in the Fields near Arles
              </div>
            </a>
            <a href='#!' className='work__six'>
              <img src={image6} alt='work one'></img>
              <div className='text_md'>
              Paul Gauguin's Armchair
              </div>
            </a>
          </div>
        </div>
      </main>

      <Ellipse text={`js`} icon={arrowRight} data="next" />
    </>
  )
}

export default Htmlpage