import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";

function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center  w-full gap-4 bg-teal-700">
      <h1 className="text-5xl font-extrabold">About Page</h1>
      <button className="p-2 bg-blue-500 text-white rounded-md"><Link to="/Services">Services</Link></button>
      <Button
          width="100px"
          height="50px"
          background="red"
          textColor="white"
          btnText="Click Me"
        />
    
    </div>


    
  );
}

export default About;
