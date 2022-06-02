import React, { Fragment, useState } from 'react'
const [ style, setStyle] = useState({display: 'none'})
function Mouseover() {
  return (
    <Fragment>
      <div className='over'
      onMouseEnter={(e) => {
        setStyle({display: 'block'})
      }}    
      onMouseLeave={(e) => {
        setStyle({display: 'none'})
      }}
      >
      </div>
    </Fragment>
  )

}
export default Mouseover;