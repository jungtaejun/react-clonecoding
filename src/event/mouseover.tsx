import React, { Fragment, useState } from 'react';
const mouseover = () => {
  const [over, setOver] = useState<boolean>(true)
  const [out, setOut] = useState<boolean>(false)

  return (
    <div className={`App ${over ? 'over' : 'out'}`}>
      
    </div>
  )

}