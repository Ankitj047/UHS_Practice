import React from 'react'
import Footer from './Footer'
import LandingNavbar from './LandingNavbar'
import Lastsection from './Lastsection'
import Middle from './Middle'
import Proposal from './Proposal'

export default function Home() {
  return (
<div>
  {/* <div style={{position: 'sticky'}}> */}
    <LandingNavbar/>
    <Proposal/>
    {/* </div> */}
    {/* <div style={{position:"fixed", overflow:"scroll",maxHeight:"100%"}}> */}
    <Middle/>
    <Lastsection/>
    <Footer/>
    {/* </div> */}
</div>
  )
}
