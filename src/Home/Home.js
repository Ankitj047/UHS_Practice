import React from 'react'
import Footer from './Footer'
import LandingNavbar from './LandingNavbar'
import Lastsection from './Lastsection'
import Middle from './Middle'
import Proposal from './Proposal'

export default function Home() {
  return (
<div>
  <div style={{position: 'sticky', top:0, zIndex: 1, paddingTop: "5px"}}>
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
