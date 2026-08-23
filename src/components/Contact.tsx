import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>İletişim</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>E-posta</h4>
            <p>
              <a href="mailto:hello@realfound.site" data-cursor="disable">
                hello@realfound.site
              </a>
            </p>
            <h4>Discord</h4>
            <p>
              <span data-cursor="disable">musa · realfound</span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Sosyal</h4>
            <a
              href="https://github.com/realfound"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="mailto:hello@realfound.site"
              data-cursor="disable"
              className="contact-social"
            >
              E-posta <MdArrowOutward />
            </a>
            <a
              href="#contact"
              data-cursor="disable"
              className="contact-social"
            >
              Discord <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Tasarım &amp; Geliştirme <br /> by <span>Musa</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
