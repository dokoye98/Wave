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
import Walkthrough from './components/walkthrough'
import Review from './components/Review'
import PostDetail from './components/PostDetail'
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path='/newpost' element={<NewPost />}/>
          <Route path='/topic' element={<TopicSelect />}/>
          <Route path='/post/:id' element={<PostDetail />}/>
          <Route path='/topic/talks' element={<Talks />}/>
          <Route path='/topic/review' element={<Review />}/>
          <Route path='/topic/walkthrough' element={<Walkthrough />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
