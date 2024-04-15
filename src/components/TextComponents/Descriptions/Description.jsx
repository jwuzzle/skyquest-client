import './Description.scss'

const Description = (props) => {
  return (
    <section className="description">
        <p className="description__copy">{props.description}</p>
    </section>
  )
}

export default Description