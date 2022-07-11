import {
  Link,
  useNavigate,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";

import Logo from "../assets/logoVAds.png";

function Home() {
  return (
    <div className="home">
      <Link to="/vehicles">
        <img src={Logo} alt="logo da VehicleAds" />
      </Link>

      <div className="infos">
        <Ads />
      </div>
    </div>
  );
}

export default Home;
