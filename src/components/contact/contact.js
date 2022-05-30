import "./contact.css";
import { AiOutlineFacebook} from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.facebook.com/ahmedelhadad.elhadad.5"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineFacebook className="icon" />
          <h2>
            facebook <span>Ahmed Elhdad</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=201023508230&text&app_absent=0"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+20 1023508230</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/ahmed_hdad11/?igshid=YmMyMTA2M2Y=" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>ahmed_hdad11</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
