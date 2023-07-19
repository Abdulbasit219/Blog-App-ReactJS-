import React, { useState } from "react"
import Home from "./components/home/Home"
import "./App.css"
import Navbar from "./components/navbar/navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./components/contact/Contact"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import WriteBlog from "./components/writeblog/Write"
import AddPost from "./components/addpost/AddPost"
import NewsFeed from "./components/newsf/NewsFeed"

function App() {

  return (
      <div>
         <BrowserRouter>
           <Navbar />
             <Routes>
                 <Route path="/" element={<Home/>}></Route>
                 <Route path="/contact" element={<Contact/>}></Route>
                 <Route path="/newsfeed" element={<NewsFeed />}></Route>
                 <Route path="/login" element={<Login/>}></Route>
                 <Route path="/sign-up" element={<Signup/>}></Route>
                 <Route path="/write-blog" element={<WriteBlog/>}></Route> 
                 <Route path="/Add-post" element={<AddPost/>}></Route>
             </Routes>
         </BrowserRouter> 
      </div>
  )
}

export default App

