import React, { useEffect, useState } from 'react'
import './NewsFeed.css'
import { useLocation } from 'react-router';
import HTMLReactParser from 'html-react-parser';

function NewsFeed() {
  
  const [items, setItems] = useState([
    {
      id: 1,
      titles: 'Data Structures:',
      contents: "Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Different data structures have different strengths and are suited for specific operations. Some common data structures include Arrays A collection of elements each identified by an index or a key.Linked Lists: A linear collection of elements where each element points to the next one in the sequence.Stacks A Last-In-First-Out (LIFO) collection of elements where elements are inserted and removed from the same end.Queues A First-In-First-Out (FIFO) collection of elements where elements are inserted at one end and removed from the other.Trees Hierarchical data structures with nodes connected by edges.Graphs A collection of nodes (vertices) connected by edges.",
      publisher: 'Published By Author',
      categorys: 'Category 1'
    },
    {
      id: 2,
      titles: 'who is being',
      contents: '<p>it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing.</p>',
      publisher: 'Published By Author',
      categorys: 'Category 2'
    },
    {
      id: 3,
      titles: 'she repels troubles as if she were training, whoever she is',
      contents: 'and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared',
      publisher: 'Published By Author',
      categorys: 'Category 3'
    },
    {
      id: 4,
      titles: 'they dont know what they hate',
      contents: 'Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held',
      publisher: 'Published By Author',
      categorys: 'Category 4'
    },
    {
      id: 5,
      titles: 'I will open them to great pain because',
      contents: 'may it please some with pain that the things of life are great, for who is great, who is whom, whom no one often repels, because they are to follow them, but those things which',
      publisher: 'Published By Author',
      categorys: 'Category 5'
    }
  ])
  const { state } = useLocation();
    const adddata = () => {
      const titles =  state?.blogdata.title;
      const contents =state?.blogdata.content;
      const categorys = state?.blogdata.category;
      // const publishby = localStorage.getItem('registeration')
      // console.log(publishby);
      

      const newtask = {id: items.length+1, titles, contents, categorys}
      const newitem = [...items, newtask]
      setItems(newitem)
    }
    useEffect(() =>{
      adddata()
    },[]);

  return (
    <>
        <div className='mx-auto w-[90%] shadow mt-3 mb-5 rounded-md p-2'>
        {items.map((item) => (
        <div key={item.id} className='mt-4 bg-white hover:border-4 border-blue-200 rounded-md'>
        <h1 className='cursor-pointer hover:text-blue-400'>{item.titles}</h1>
        <p className='text-center' dangerouslySetInnerHTML={{__html: item.contents}} />
        <p>{item.categorys}</p>
        <p className='text-right italic font-bold opacity-40'>{item.publish}</p>
        <button className='btn btn-secondary m-2'>Read More</button>
        </div>
        ))}
        </div>
      </>  
        );
        }

export default NewsFeed







