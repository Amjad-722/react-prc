import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import data from "../data.json"

function Layout() {
  return (
    <div>
     <Navbar/>
     <Footer data={data}/>
    </div>
  )
}

export default Layout;