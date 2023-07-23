import React, { useEffect, useRef, useState } from 'react'
import "./AddPost.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import JoditEditor from 'jodit-react'

const getdatafromLS = () => {
  const data = localStorage.getItem('blogsdata')
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}

function AddPost() {
  
  const editor = useRef(null);

  const [loggedindetails, setLoggedIndetails] = useState([])
  const [blogdata, setBlogData] = useState(getdatafromLS())
  const [title, setTitle] = useState()
  const [category, setCategory] = useState()
  const [content, setContent] = useState()

  const navigate = useNavigate()

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

  const onlogout = () => {
    localStorage.removeItem('logindetails')
    navigate('/');
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let blogdata2={
    title: title,
    content: content,
    category: category
    }
    setBlogData([...blogdata,blogdata2])
  }


   useEffect(()=>{
      localStorage.setItem('blogsdata', JSON.stringify(blogdata))
   },[blogdata])

   const [isOpen, setIsOpen] = useState(false)

    const parastyle = {
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        display: '-webkit-box'
    }

  return (
    <>
      {    
        loggedindetails.length === 0 ? <div className='alert'><p>Please Sign In First <Link to="/login" className='text-blue-400'>Sign In</Link></p>
        </div> :
          <div className='logout-btn'>
            <button onClick={onlogout} className='mt-16'>
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
                onChange={(e)=>{setTitle(e.target.value)}} className='form-control' placeholder='Enter Title Here'></input>
              </div>
              
              <div className='form group'>
                <label htmlFor="content">Type Blog</label>
                  <JoditEditor
                  ref={editor}
                  value={content}
                  tabIndex={1}
                  onBlur={(newContent) => setContent(newContent)}
                  onChange={(newContent=>{setContent(newContent.target)})}
                  />
              </div>
              
              <div>
                <label htmlFor="category">Select Category</label>
                <select name="category" className='form-control'
                onChange={(e)=>{setCategory(e.target.value)}}>
                  <option value="" disabled>---select---</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Sports">Sports</option>
                  <option value="News">News</option>
                  <option value="Education">Education</option>
                  <option value="Technology">Technology</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            
            </form>
          </div>

          <div className='mx-2 publish-btn'>
          <button className='btn btn-primary bg-blue-400' type='button' onClick={handleSubmit}>Publish</button>
          </div>
          </div>

          <div className='mx-auto w-[90%] shadow mb-5 rounded-md p-2'>
            <div className='bg-white hover:border-4 border-blue-200 rounded-md'>  
              {blogdata.map((data) => (
                <div key={data.id}>
                  <h1 className='cursor-pointer hover:text-blue-400'>{data.title}</h1>
                  <p style={isOpen ? null : parastyle} dangerouslySetInnerHTML={{ __html: data.content }}/>
                  <p className='opacity-40 flex'>{data.category}</p>
                  <button className='m-2 btn btn-secondary' 
                  onClick={()=>{setIsOpen(!isOpen)}}>{isOpen ? 'read less' : 'read more...'}</button>
                </div>
              ))
              }
            </div>  
          </div>         
      </>
  )
}

export default AddPost


// onClick={()=>{{location.adddata(blogdata.title, blogdata.content, blogdata.category)}}}