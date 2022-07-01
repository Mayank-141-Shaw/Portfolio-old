import React, { useState } from 'react'

function Clicker(props) {
    const [open, toggle] = useState(props.isOpen);

  return (
    <button onClick={() => toggle(!open) } >{open ? 'Close' : 'Open'}</button>
  )
}

export default Clicker