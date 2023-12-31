import WorkCard from "./Work-card"

const Works = ({ works }) => {

  return (
    <>
      {
        works.map((item, index) => {
          return <WorkCard id={item.id} workLink={item.workLink} imageLink={item.workImage}
            description={item.description} note={item.note} key={index} />
        })
      }
    </>
  )
}

export default Works