import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    const handleNavigate = (path) =>{
        navigate(path)
    }
   
    return (
        <div>
            <header>
            <h1>Wave</h1> 
            </header>
            
            <main>
            
            <section>
                <h2>Website topics</h2>
                <div className="homepage-container">
            <div className="button-group">
            <button onClick={() => handleNavigate('/topic/talks')} className="topic-button">Talks</button>
            <button onClick={() => handleNavigate('/topic/review')} className="topic-button">Review</button>
            <button onClick={() => handleNavigate('/topic/walkthrough')} className="topic-button">Walkthrough</button>
            </div>
            </div>
            </section>
            </main>

            <footer>
            <p>&copy; Wave</p>
            </footer>
        </div>
    )
}

export default Home
