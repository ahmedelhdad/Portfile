import "./members.css";
import imgOne from '../props/Almas.PNG'
import imgTwo from '../props/App IOHONE.PNG'
import imgThree from '../props/Elhdad.PNG'
import imgFour from '../props/Bandi.PNG'
import imgFiv from '../props/coffe.PNG'
import imgSix from '../props/Specail.PNG'
import imgSeven from '../props/tech.PNG'

const Members = () => {


  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Projects</h1>


      <div className="member one">

        <div className="member-img image ">
        <img src={imgOne} alt=''/>
        <div className="overlay">
        <a href="https://ahmedelhdad.github.io/TAlmas/" className="contact-member">
           View
          </a>
        </div>
         </div>
      </div>


      <div className="member two" >

        <div className="member-img image " >
        <img src={imgTwo} alt=''/>
        <div className="overlay">
        <a href="https://ahmedelhdad.github.io/Apple/" className="contact-member" >
           View
          </a>
        </div>
         </div>
      </div>

      <div className="member three">

        <div className="member-img image ">
        <img src={imgThree} alt=''/>
        <div className="overlay">
        <a href="https://ahmedelhdad.github.io/template-3/" className="contact-member">
           View
          </a>
        </div>
         </div>
      </div>

      <div className="member four">

        <div className="member-img image ">
        <img src={imgFour} alt=''/>
        <div className="overlay">
        <a href="https://ahmedelhdad.github.io/bootstrap-1/" className="contact-member">
           View
          </a>
        </div>
         </div>
      </div>

      <div className="member five">

        <div className="member-img image ">
        <img src={imgFiv} alt=''/>
        <div className="overlay">
        <a href="https://ahmedelhdad.github.io/bootstrap-2/" className="contact-member">
           View
          </a>
        </div>
         </div>
      </div>

      <div className="member six">

        <div className="member-img image ">
        <img src={imgSix} alt=''/>
        <div className="overlay">
        <a href="https://ahmedelhdad.github.io/JavaScript/" className="contact-member">
           View
          </a>
        </div>
         </div>
      </div>

      <div className="member seven">

        <div className="member-img image ">
        <img src={imgSeven} alt=''/>
        <div className="overlay">
        <a href="../props/Project/Almas/html/template1.html" className="contact-member">
           View
          </a>
        </div>
         </div>
      </div>



    </div>
  );
};

export default Members;
