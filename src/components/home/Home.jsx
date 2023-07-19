import './home.css'
import image from '../images/img.png'

function Homepage () {
    const divstyle = {
        backgroundImage: `url(${image})`
    }
    return (
        <>
        <div className="w-full h-screen bg-no-repeat bg-cover bg-center conta" style={divstyle}>
        <div className='center-position'>
            <h1>Viral Blogs</h1>
            <p>Welcome to our blog! where ideas come to life!</p>
        </div>
        </div>
        </>
    )
}

export default Homepage