import React from "react";

import './input-text.css'

function InputText() {
  return (
      <div className="input-wrapper">
         <input type="text" className="search" placeholder="Search tweets by hastag" />
      </div>
  )
}

export default InputText