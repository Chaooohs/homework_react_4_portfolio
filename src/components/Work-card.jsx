import arrowWhite from '../img/arrow-rigth-white.svg'

const WorkCard = ({ id, imageLink, description, note, workLink }) => {
  return (
    <a id={"card" + id} className="card" target="_blank" href={workLink}>
      <img src={imageLink} alt='work'></img>
      <div className='description text_sm'>
        <span> {description} </span>
        <span className='notes'> {note} </span>
        <img className='description__arrow' src={arrowWhite} alt="arrow"></img>
      </div>
    </a>
  )
}

export default WorkCard