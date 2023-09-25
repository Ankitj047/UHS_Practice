import React from 'react'
import Footer from './Footer'
import LandingNavbar from './LandingNavbar'
import Lastsection from './Lastsection'
import Middle from './Middle'
import Proposal from './Proposal'
import { io } from 'socket.io-client'

export default function Home() {
  const socket = io("http://localhost:5000/");
  console.log(socket,"socket")
  socket.emit('new_message', "check")
  return (
<div>
   <div style={{position: 'sticky', top:0,   backgroundColor: '#fff', zIndex: 1, paddingTop: "5px"}}>
    <LandingNavbar/>
    <Proposal/>
    </div>
    <div>
    <Middle/>
    <Lastsection/>
    <Footer/>
    </div>
</div>
  )
}
