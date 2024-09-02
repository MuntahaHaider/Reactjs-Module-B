import { Button } from '@mui/material'
import React from 'react'

const Buttons = ({submit}) => {
  return (
    <>
    <Button style={{width:'100%',backgroundColor:'#008000',color:'white',}}>{submit}</Button>
    </>
  )
}

export default Buttons