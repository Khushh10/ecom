import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const Product = () => {
  const navigate = useNavigate();
  const [data, useData] = useState(true);
  function navv(data: boolean) {
    navigate('/login', { state: data })
  }
  return (
    <>
      <div>Product</div>
      <Button onClick={() => { navv(data) }}>Sample</Button>
    </>
  )
}

export default Product