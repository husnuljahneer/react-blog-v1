import React from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const authNavigation = [
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" }
];

export default function Navbar() {
  return (
    <div className="h-20 flex flex-row justify-around text-xl bg-white text-red-700 mx-20 mt-5">
      <div className="text-black  ">
        {navigation.map(item => {
          return (
            <Link to={item.path} key={item.name}>
              {" "}{item.name}{" "}
            </Link>
          );
        })}
      </div>
      <div>
        {authNavigation.map(item => {
          return (
            <Link to={item.path} key={item.name}>
              {"   "}
              {item.name}
              {"   "}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
