import React from "react";
// import { Link } from "react-router-dom";

export default function About() {
  const [magic, setMagic] = React.useState(false);
  const [magic2, setMagic2] = React.useState(10);
  const fooFunction = e => {
    setMagic(true);
    setMagic2(magic2 + 50);
  };
  return (
    <>
    <h1 onMouseOver={fooFunction}>About</h1>
    <div className="flex flex-1 justify-center align-middle">
      <div className="w-20 bg-teal-500" style={{padding : magic ? magic2 : 50}}>x</div>
    </div>
    </>
  );
}
