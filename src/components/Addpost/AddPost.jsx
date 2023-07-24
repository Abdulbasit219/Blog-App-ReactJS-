import React, { useEffect, useRef, useState } from 'react'
import "./AddPost.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import JoditEditor from 'jodit-react'
import AddPostCr from './AddPostCr'

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
  const [changebtn, setChangebtn] = useState(true)
  const [iseditId, setIseditId] = useState(null)

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
    if(!title || !content || !category){
      alert('All fields are required');
    }
    else if(title && !changebtn){
      setBlogData(
        blogdata.map((element) => {
          if(element.id === iseditId){
            return {...element, title: title, category: category, content: content}
          }
          return element
    })
      )
      setChangebtn(true)
      setTitle('')
      setCategory('')
      setContent('')
    }

    else{
    let blogdata2={
    title: title,
    content: content,
    category: category,
    id: blogdata.length+1
    }
      setBlogData([...blogdata,blogdata2])
      setTitle('')
      setCategory('')
      setContent('')
  }
  }

   useEffect(()=>{
      localStorage.setItem('blogsdata', JSON.stringify(blogdata))
   },[blogdata])

  const deleteitem = (id) => {
      const filtered = blogdata.filter((element)=>{
        return element.id !== id
      })
      setBlogData(filtered)
  }

  const edititem = (id) => {
    const newedititem = blogdata.find((item)=>{
      return item.id === id
    })
    console.log(newedititem);
    setTitle(newedititem.title)
    setCategory(newedititem.category)
    setContent(newedititem.content)
    setChangebtn(false)
    setIseditId(id)
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
                <input type="text" value={title}
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
                <select className='form-control' value={category}
                onChange={(e)=>{setCategory(e.target.value)}}>
                  <option value="" >---select---</option>
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

          <div className='mx-2 publish-btn logout-btn button'>
           
          <button type='button' onClick={handleSubmit}>{changebtn ? "Publish" : "Update"}</button>
          </div>
          </div>

          <div>
              {blogdata.map((data) => (
                 <AddPostCr 
                 key={data.id}
                 title={data.title}
                 content={data.content}
                 category={data.category}
                 delete={()=>deleteitem(data.id)}
                 edit={()=>{edititem(data.id)}}
                 />
              ))
              }  
          </div>         
      </>
  )
}

export default AddPost


