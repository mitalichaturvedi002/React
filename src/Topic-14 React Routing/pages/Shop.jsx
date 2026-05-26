import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useTheme} from "../store/ThemeContext";


const Shop = () => {
  const navigate = useNavigate();
  const res = useLocation();
  console.log("res in shop:", res?.state?.userId);
  console.log("res in shop:", res?.state?.userName);

  const {theme, setTheme} = useTheme();
  

  return (
    <div id="shop">
      <h1>Welcome to Shop Page</h1>
      <button onClick={() => navigate(-1)}>prev page</button>
      <div id="shop" className={theme}>
        <div className="center-container">
          <div className="shop-details">
            <h2>Welcome to Shop Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum architecto laborum sequi esse incidunt quisquam consequatur nam ratione qui.</p>

            <p>Nemo illum architecto laborum sequi esse incidunt quisquam consequatur nam ratione qui.</p>
            
            <button onClick={() => setTheme("dark")}>Dark</button>
          </div>
          <div className="shop-details">
            <h2>Welcome to Shop Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum architecto laborum sequi esse incidunt quisquam consequatur nam ratione qui.</p>

            <p>Nemo illum architecto laborum sequi esse incidunt quisquam consequatur nam ratione qui.</p>
            <button onClick={() => setTheme("light")}>Light</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;