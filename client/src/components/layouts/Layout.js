import React, { useState } from "react";
import Home from "../../pages/Home";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import "./Layout.css";
import "../Menus/Menus";
import Menus from "../Menus/Menus";

export default function Layout() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            
            <p onClick={handleToggle}>
              {toggle ? (
                <BsChevronDoubleRight size={30} />
              ) : (
                <BsChevronDoubleLeft size={30} />
              )}
            </p>
            
          </div>
          <Menus toggle={toggle}/>
          
        </div>
       
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
}
