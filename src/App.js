
import './App.css';
import travellogo from './images/logo.png';
import arrowdown from './images/arrow-down.jpg';
import user from './images/user.jpg';
import airplane from './images/airplane2.png';
import location from './images/location.jpg';
import calender from './images/calendar.jpg';
import nike from './images/nike.jpg';
import intrax from './images/intrax-logo-svgrepo-com 1.jpg';
import mastercard from './images/mastercard.jpg';
import silverstar from './images/silver-star.jpg';
import applepay from './images/apple-pay.jpg';
import arrow from './images/Arrow1.jpg';
import resort from './images/mountain-resort.png';
import freezing from './images/freezing-winterlake.png';
import fuji from './images/fuji-mountain.jpg';
import beach from './images/beach.png';
import hut from './images/hut-boat.png';
import winter from './images/winter.png';
import skate from './images/skateboard.png'
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';




function App() {
  return (
    
    <div>

    <section className="top-part">
        <div className='Navbar'>
        <div className='nav-logo'>
          <img src={travellogo} alt='' />
            <p>Artic Travels</p>
        </div>
        <ul className='Nav-list'>
            <li className='Nav-link'>About us</li>
            <li className='Nav-link'>Support</li>
            <li className='Nav-link'>Language</li>
        </ul>

        <button className='signin-btn'>Sign In</button>
    </div>

         <header className='header'>
            <div className='header-text'>
            <h1>Plan The Perfect Winter </h1>
            <p>Easily plan your ideal ski trip from home with the help of professionals</p>


            </div>
            
            <button className='book-btn'>Book Here</button>

        </header>
      </section>

      <section className ='book'>
        <div className='book-content'>
          <div className='book-title'>
            <img src = {location} alt = '' />
            <p>LOCATION</p>
          </div>
          <div className = 'book-text'>
            <p>Iceland</p>
            <img src={arrowdown} alt='' />
          </div>
        </div>

        <div className='book-content'>
          <div className='book-title'>
            <img src = {user} alt = '' />
            <p>PERSON</p>
          </div>
          <div className = 'book-text'>
            <p>4 Persons</p>
            <img src={arrowdown} alt='' />
          </div>
        </div>

        <div className='book-content'>
          <div className='book-title'>
            <img src = {calender} alt = '' />
            <p>CHECK IN</p>
          </div>
          <div className = 'book-text'>
            <p>12 January 2022</p>
            <img src={arrowdown} alt='' />
          </div>
        </div>


        <div className='book-content'>
          <div className='book-title'>
            <img src = {calender} alt = '' />
            <p>CHECK OUT</p>
          </div>
          <div className = 'book-text'>
            <p>18 January 2022</p>
            <img src={arrowdown} alt='' />
          </div>
        </div>

        <button className ="booktrip-btn">Book Trip 
        <img src = {airplane} alt='' />
        </button>


      </section>

      <section className='logo-img'>
        <img src ={nike} alt=''/>
        <img src ={applepay} alt=''/>
        <img src ={silverstar} alt=''/>
        <img src ={intrax} alt=''/>
        <img src ={mastercard} alt=''/>

      </section>

      <section className="map-content">
        <div className="content">
        <h2>Creating the best <span>ice-cold!</span>experience you would never forget</h2>
        <p>Would you explore nature paradise in the world, find the best destination in the world with us.</p>
        </div>
        <img src={arrow} alt =' ' className='arrow' />
        <h2 className='arrow-text'>View Regions Available</h2>
      </section>

      <section className = 'pictures'>
        <img src={resort} alt='' />
        <img src={fuji} alt='' />
        <img src={freezing} alt='' />

      </section>

      <section class="grid">
        <h1 className='grid-title'>The best resorts to chill and relax</h1>
        <img src={beach} alt =' ' className='one' />
        <img src={hut} alt =' ' className='two' />
        <img src={winter} alt =' ' className='three'/>
        <img src={skate} alt =' ' className='four'/>

      </section>

      <section class='view'>
        <h1>View Passes We've made available for you</h1>
        <button class="view-btn">View Passes</button>
      </section>
     
     <footer>

      <div className = 'footer-text'>
       <div className = 'footer-title'>
         <img src={travellogo} alt='' />
         <h3>Artic Travels</h3>
         <p>Book your trip in minutes, get full
control for much longer.</p>
<div className ='icons'>
        <img src={facebook} alt='' />
        <img src={instagram} alt='' />
        <img src={twitter} alt='' />
        </div>

       </div>
       <div className = 'footer-list'>
         <h3>COMPANY</h3>
         <p>About</p>
         <p>Careers</p>
         <p>Mobile</p>
       </div>
       <div className = 'footer-list'>
       <h3>CONTACT</h3>
         <p>FAQ</p>
         <p>Press</p>
         <p>Affiliates</p>
       </div>
       <div className = 'footer-list'>
       <h3>MORE</h3>
         <p>Airlines</p>
         <p>Airfees</p>
         <p>Lowfare Tips</p>
       </div>

     </div>

       <div className='footer-text2'>
         <p>© 2022 Arctic Travels - All right reserved.</p>
         <p className ='privacy'>Privacy Policy</p>
         <p className ='terms'>Terms of use</p>
       </div>
     </footer>
      
    </div>
  );
}

export default App;
