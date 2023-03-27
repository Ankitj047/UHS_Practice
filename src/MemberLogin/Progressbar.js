import React from 'react'

export default function Progressbar({bgcolor,progress,height}) {

const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
   borderRadius:40,
    textAlign: 'right'
  }

  return (
    <div className="progrssbar-parentdiv">
      <div style={Childdiv}>
        <span className="progresstext">{`${progress}%`}</span>
      </div>
    </div>
  )
}
