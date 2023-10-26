import ellipse from '../img/ellipse.png'

const el = (selector) => document.querySelector(selector);
const all = (selector) => document.querySelectorAll(selector);

const Ellipse = ({ text, icon, data}) => {



  const ellipseHoverUpHandler = (e) => {

    all('.ellipse__img').forEach((item) => {
      if (e.target.closest('[data-line="prev"]')) {
        el("[data-image='prev']").style.opacity = 0;
      }
      else if (e.target.closest('[data-line="next"]')) {
        el("[data-image='next']").style.opacity = 0;
      }
    })
  }

  const ellipseHoverDownHandler = (e) => {

    all('.ellipse__img').forEach(() => {
      if (e.target.closest('[data-line="prev"]')) {
        el("[data-image='prev']").style.opacity = 1;
      }
      else if (e.target.closest('[data-line="next"]')) {
        el("[data-image='next']").style.opacity = 1;
      }
    })
  }

  return (
    <div class="wrap">
      <div className='ellipse somework__ellipse' data-line={data} onMouseOver={ellipseHoverUpHandler} onMouseOut={ellipseHoverDownHandler}>
        <img className='ellipse__img' data-image={data} src={ellipse} alt="img"></img>
        <div className='ellipse__content'>
          <img className='ellipse__arrow' src={icon} alt="next"></img>
          <div className='text_md ellipse__text'>{text}</div>
        </div>
      </div>
    </div>
  )
}

export default Ellipse