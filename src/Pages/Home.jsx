import React from "react";
import Button from "../Components/Button/Button";

function Home() {
  return (
    <>
      <div className="mt-2  flex justify-center">
        <Button
          width="300px"
          height="50px"
          background="blue"
          textColor="white"
          btnText="Click Me"
        />
      </div>
    </>
  );
}

export default Home;
