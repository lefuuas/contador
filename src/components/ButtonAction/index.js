import React from 'react'
import "./index.css"

export const ButtonAction = ({name, lefunction}) => {
  return (
    <button onClick={lefunction}>{name}</button>
  )
}
