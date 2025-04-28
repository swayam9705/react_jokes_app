import "./Card.css"

const Card = (props) => {
    return (
        <div className="Card">
            <p className="setup"><strong>Setup: </strong> { props.setup }</p>
            <p className="punchline"><strong>Punchline: </strong> { props.punchline }</p>
        </div>
    )
}

export default Card