import React, { useEffect, useState } from "react"
import "./Home.css"
import Card from "./Card"

const Home = () => {
    const [jokes, setJokes] = useState([])
    const [atBottom, setAtBottom] = useState(false)



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

        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            const clientHeight = document.documentElement.clientHeight

            const tolerance = 10

            if (scrollHeight - scrollTop <= clientHeight + tolerance) {
                setAtBottom(true)
            }
            else {
                setAtBottom(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    useEffect(() => {
        if (atBottom) {
            console.log("You have reached the bottom!")
        }
        setJokes(prev => [...prev, ...jokes])
    }, [atBottom])

    return (
        <div className="Home">
            {/* Navbar */}
            <nav>
                This is a jokes app 😜
            </nav>


            {/* content */}

            {
                jokes.map(joke => <Card setup={joke.setup} punchline={joke.punchline} />)
            }

        </div>
    )
}

export default Home