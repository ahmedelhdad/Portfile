import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="#https://www.instagram.com/ahmed_hdad11/?igshid=YmMyMTA2M2Y=">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/ahmedelhadad.elhadad.5">
          <FaFacebookF className="social" />
        </a>
        <a href="https://github.com/ahmedelhdad">
        <AiFillGithub className="social" />
      </a>

      </div>
    </div>
  );
}
export default Footer;
