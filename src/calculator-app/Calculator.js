import React from 'react'
import './calculator.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
const Calculator = () => {
  const [user, setuser] = useState("");
  return (
    <div className='container'>
      <h1>Calculator App</h1>
    </div>
  )
}

export default Calculator