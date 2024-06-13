import React from 'react'
import Button from '../Components/Button/Button';

 function Contactus() {
  return (
    <div className=' flex justify-center bg-green-300 items-center  gap-3 h-screen   '   >
     <h1 className='text-5xl text-black font-extrabold' > Contact Page</h1>


     <Button
          width="100px"
          height="50px"
          background="red"
          textColor="black"
          btnText="Follow  "
          borderRadius="34px"
        />
      
    </div>
  )
}

export default  Contactus;