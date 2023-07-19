import React, { useEffect, useRef, useState } from 'react'
import "./AddPost.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import JoditEditor from 'jodit-react'
import HTMLReactParser from "html-react-parser"

function AddPost() {

  const editor = useRef(null);
  const [loggedindetails, setLoggedIndetails] = useState([])
  const [blogdata, setBlogData] = useState([
    {
      title: null,
      content: null,
      category: null
    }
  ])


  const details = () => {
    const getdata = localStorage.getItem('logindetails')
    if (getdata && getdata.length) {
      const user = JSON.parse(getdata);
      setLoggedIndetails(user)
    }
  }
  useEffect(() => {
    details();
  }, [])

  const navigate = useNavigate();
  const onlogout = () => {
    localStorage.removeItem('logindetails')
    navigate('/');
  }
  
  const onchange = (e) => {
    const { value, name } = e.target
    setBlogData(() => {
      return {
          ...blogdata,
          [name]: value
      }
  })
  }
  
  const navigate1 = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate1('/NewsFeed', {state:  {blogdata}})
  }

  return (
    <>
      {
        loggedindetails.length === 0 ? <div className='alert'><p>Please Sign In First <Link to="/login">Sign In</Link></p>
        </div> :
          <div className='logout-btn'>
            <button onClick={onlogout}>
              Log Out
            </button>
          </div>
      }
        <div className='first'>
          <div className='container card p-2 form-text form_container shadow rounded'>
            <form>
              <div className='form group'>
                <label htmlFor="title">Blog Title</label>
                <input type="text" name="title"
                onChange={onchange} className='form-control' placeholder='Enter Title Here'></input>
              </div>
              
              <div className='form group'>
                <label htmlFor="content">Type Blog</label>
                  <JoditEditor
                   ref={editor}
                   value={blogdata.content}
                   onChange={(value) => setBlogData({...blogdata,content:value})}
                  />
              </div>
              
              <div>
                <label htmlFor="category">Select Category</label>
                <select name="category" className='form-control' 
                onChange={onchange}>
                  <option value="">select</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Sports">Sports</option>
                  <option value="News">News</option>
                </select>
              </div>
            
            </form>
          </div>
          
          <div className='mx-2 publish-btn'>
          <button className='btn btn-primary bg-blue-400' type='button' onClick={handleSubmit}>Publish</button>
          </div>

          </div>
      </>
  )
}

export default AddPost


// onClick={()=>{{location.adddata(blogdata.title, blogdata.content, blogdata.category)}}}