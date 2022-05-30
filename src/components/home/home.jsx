import './home.css';
import img from '../props/1652826940274.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';


const clickHandler = function(event)
{
  event.currentTarget.classList.toggle('active')
  
}
function Home() {
 
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show ' onClick={clickHandler}>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt=''  />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p className='about'>
        My name is Ahmed Mahmoud, a graduate of the Faculty of Specific Education, Department of Educational Technology
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
