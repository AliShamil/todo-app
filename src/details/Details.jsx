import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
const {message}= useParams()
  return (
    <div>{message}</div>
  )
}

export default Details