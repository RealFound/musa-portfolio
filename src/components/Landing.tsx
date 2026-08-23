import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Selam! Ben</h2>
            <h1>
              MUSA
              <br />
              <span>REALFOUND™</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Yaratıcı bir</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Sistem Mimarı</div>
              <div className="landing-h2-2">Plugin Geliştirici</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Plugin Geliştirici</div>
              <div className="landing-h2-info-1">Sistem Mimarı</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
