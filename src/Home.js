import React from 'react'
import './Home.css'

function Home() {
    return (
        <div>
            <header>
            <h1>Here is the MSc Compiler WebApp</h1> 
            </header>
            
            <main>
            <section>
                <p>This project is primarily focused on teaching users the basics of coding using a basic compiler.</p>
                <p>Please use this as an entry to tech.</p>
                <p>Good luck coding!</p>
            </section>
        
            <section>
                <h2>Project Features</h2>
                <ul>
                    <li>Basic string compilation</li>
                    <li>Abstract Syntax Tree (AST)</li>
                    <li>Semantic Analysis</li>
                    <li>Three-Address Code (TAC)</li>
                    <li>Assembly Code</li>
                </ul>
            </section>
            </main>

            <footer>
            <p>&copy; MSc Compiler Project</p>
            </footer>
        </div>
    )
}

export default Home
