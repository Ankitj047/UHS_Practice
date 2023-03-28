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
    // https://www.geeksforgeeks.org/how-to-create-a-custom-progress-bar-component-in-react-js/
    <div className='progreebar-container'>
    <div className="progrssbar-parentdiv">
      <div style={Childdiv}>
        <span className="progresstext">{`${progress}%`}</span>
      </div>
    </div>
    </div>
  )
}
