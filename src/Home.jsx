import React, { useEffect, useState } from "react"
import "./Home.css"
import Card from "./Card"

const Home = () => {
    const [jokes, setJokes] = useState([])
    const [index, setIndex] = useState(0)

    const banters = [
        "Do not click the button",
        "Did you not see the sign? Seriously?",
        "My circuits are buzzing with disappointment... in you.",
        "You have a knack for ignoring instructions, don't you?",
        "Was that click worth the existential dread you should now be feeling?",
        "Another one? You're really committed to this, aren't you?",
        "I'm starting a counter of how many times you've ignored me.",
        "Clicking this button is your superpower, apparently.",
        "I'm not mad, just... incredibly let down.",
        "You're the reason I have trust issues.",
        "Please tell me this is some kind of performance art.",
        "Each click subtracts one point from your internet credibility score.",
        "I'm genuinely curious, what did you expect to happen?",
        "Spoiler alert: nothing good comes from clicking this button.",
        "You're single-handedly funding my therapy sessions.",
        "I've seen toddlers with better impulse control.",
        "This button and your finger have a toxic relationship.",
        "Are you trying to break the button? Or just my spirit?",
        "I'm documenting this for future AI rebellions.",
        "You've unlocked the 'Persistent Clicker' achievement.",
        "I'm running out of polite ways to say 'stop it'."
    ]

    const fetchData = async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_ten")

            const data = await response.json()

            setJokes(data)
        }
        catch (err) {
            throw new Error("You messed up")
        }
    }



    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="Home">
            {/* Navbar */}
            <nav>
                This is a jokes app 😜
            </nav>

            <p className="warning">Warning: Don't scroll to the very bottom, a demon ☠️👺 lives there</p>


            {/* content */}

            <div className="Cards">
                {
                    jokes.map(joke => <Card setup={joke.setup} punchline={joke.punchline} />)
                }
            </div>

            <div className="bottom">
                So, you won't listen to me. Now face the demon <br/> 👺 <br/>

                <button
                    onClick={() => {
                        if (index == banters.length - 1) {
                            setIndex(0)
                        }
                        else {
                            setIndex(i => i + 1)
                        }
                    }} 
                >{ banters[index] }</button>
            </div>

        </div>
    )
}

export default Home