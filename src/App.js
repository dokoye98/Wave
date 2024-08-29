// src/App.js
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import NewPost from './components/NewPost'
import Home from './Home'
import NavBar from './NavBar'
import TopicSelect from './components/TopicSelect'
import Talks from './components/Talks'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/newpost' element={<NewPost />}/>
          <Route path='/topic' element={<TopicSelect />}/>
          <Route path='/topic/talks' element={<Talks />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
