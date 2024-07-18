import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  let links = [
    {
      path: "/",
    },
    {
      path: "/coffee",
      title: "COFFEE",
    },
    {
      path: "/subscribe",
      title: "SUBSCRIBE & SAVE",
    },
    {
      path: "/merch",
      title: "MERCH",
    },
    {
      path: "/store",
      title: "FIND IN STORE",
    },
    {
      path: "/blog",
      title: "BLOG",
    },
    {
      path: "/about",
      title: "ABOUT",
    },
  ];

  const navigate=useNavigate();

  const handlelogin=()=>{
    navigate('/login')
  }

  return (
    <div style={{marginTop:"15px"}}>
      <div  style={{ display: "flex", justifyContent: "space-around"}}>
        {links.map((el) => (
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "red", textDecoration: "none", fontWeight:"bold"}
                : { color: "white", textDecoration: "none" };
            }}
            key={el.path}
            to={el.path}
          >
            {el.title}
          </NavLink>
        ))}
      
        <div style={{marginLeft:"15px"}}>
          {/* login button */}
        <Link to="/login"><FaRegUser style={{color:"white"}}/></Link>
        {/* search button */}
        <NavLink style={{color:"white",marginLeft:"15px",fontSize:"20px"}}>
          <IoIosSearch />
        </NavLink>

        {/* cart button */}
        <NavLink style={{color:"white",marginLeft:"15px",fontSize:"20px"}}>
          <AiOutlineShoppingCart />
        </NavLink>
        </div>


      </div>

    </div>
  );
}

export default Navbar;
