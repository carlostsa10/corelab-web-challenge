import { useState } from "react";
import logosemfund from "../assets/logosemfund.png";
import { Create } from "./Create";

import "../styles/footer.css";
import "../styles/home.css";

export function Home() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Create />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-content-logo">
            <img src={logosemfund} alt="logo" />
          </div>
          <div className="footer-content-text">
            <p>
              <span>VAds</span> desenvolvido com ♡ por CT.
            </p>
            <div className="footer-links"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
