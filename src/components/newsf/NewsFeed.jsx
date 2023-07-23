import React, { useEffect, useState } from 'react'
import './NewsFeed.css'
import NewsFeeds from '../nfeeds/NewsFeeds';

function NewsFeed() {

  const [items, setItems] = useState([
    {
      id: 1,
      titles: 'Data Structures:',
      contents: "Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Different data structures have different strengths and are suited for specific operations. Some common data structures include Arrays A collection of elements each identified by an index or a key.Linked Lists: A linear collection of elements where each element points to the next one in the sequence.Stacks A Last-In-First-Out (LIFO) collection of elements where elements are inserted and removed from the same end.Queues A First-In-First-Out (FIFO) collection of elements where elements are inserted at one end and removed from the other.Trees Hierarchical data structures with nodes connected by edges.Graphs A collection of nodes (vertices) connected by edges.",
      publisher: 'Published By Author',
      categorys: 'Education'
    },
    {
      id: 2,
      titles: 'Programming Language',
      contents: 'Python - A Beginners Guide to Python ProgrammingPython is a versatile and beginner-friendly programming language loved by developers worldwide. In this blog, well explore the basics of Python programming, from variables and data types to control flow and functions. Whether youre a complete novice or an experienced coder, Pythons clear syntax and extensive libraries make it a great language to learn and master. Get ready to embark on a coding journey with PythonJavaScript - Unleashing the Power of JavaScriptJavaScript is the language of the web, powering interactive and dynamic websites. In this blog, well dive into the world of JavaScript, from manipulating the DOM to handling events and asynchronous programming. Discover the magic behind JavaScript frameworks like React and Angular, and learn how this language has evolved from a simple scripting language to a full-fledged ecosystem for web developmentJava - Building Robust Applications with JavaJava is the backbone of enterprise-level applications and Android development. In this blog, well explore the Java programming language, its object-oriented nature, and its vast standard library. From creating classes and objects to working with interfaces and exceptions, Java provides a solid foundation for building robust and scalable software. Join us as we uncover the power of Java and its role in modern application development.',
      publisher: 'Published By Author',
      categorys: 'Education'
    },
    {
      id: 3,
      titles: 'Cricket: A Game of Passion, Emotion, and National Pride',
      contents: 'The Spirit of Cricket: Beyond the BoundariesCricket is not just about runs, wickets, and boundaries; it is a sport that values fair play, sportsmanship, and respect for opponents. The Spirit of Cricket, a code of conduct, emphasizes the need for integrity and ethical behavior on and off the field. Captains often lead by example, accepting umpires decisions gracefully, and players shake hands after a fierce contest, acknowledging the spirit of camaraderie that unites them despite the intensity of the match.Crickets Cultural ImpactCricket has embedded itself deeply into the cultural fabric of nations where it is revered. Countries like India, Australia, England, Pakistan, and the West Indies have an unwavering passion for the game, and cricketing heroes are celebrated as cultural icons. Matches serve as social gatherings, bringing families and friends together, and cricketing events often coincide with festivals, amplifying the festive spirit. The game becomes more than just a sport; it becomes an expression of national identity and pride.The Thrill of T20 and One-Day Internationals (ODIs)While Test cricket showcases the endurance and skill of players over several days, the emergence of T20 and ODIs has revolutionized the sport. These fast-paced formats inject a new level of excitement into the game, with batsmen unleashing breathtaking strokes and bowlers trying innovative tactics to outwit their opponents. The nail-biting finishes and last-over thrillers make T20 and ODIs a favorite among both avid fans and newcomers to cricket.',
      publisher: 'Published By Author',
      categorys: 'Sports'
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

  const adddata = () => {
    const getdata = localStorage.getItem('blogsdata')
    if (getdata) {
      const GetDataInArray = JSON.parse(getdata);
      const newItems = items.concat(GetDataInArray.map((item, index) => ({ ...item, id: index + 1, titles: item.title, contents: item.content, categorys: item.category })));
      setItems(newItems);
    }
  }
  useEffect(() => {
    adddata()
  }, [])

  return (
    <>
      <div className='mt-24'>
        {items.map((item) => (
          <NewsFeeds
            key={item.id}
            title={item.titles}
            content={item.contents}
            category={item.categorys}
          />
        ))
        }
      </div>
    </>
  );
}

export default NewsFeed
