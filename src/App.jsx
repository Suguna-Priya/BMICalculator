import { useState } from 'react'
import bmiImg from './assets/bmi-bg-img.jpg'
import './App.css'


function App() {

const [height,setHeight] = useState();
const [weight,setWeight] = useState();
const [bmi,setBmi] = useState();
const [err,setErr] = useState();
const [status,setStatus] = useState();

const calculateBmi=()=>{

  // Regular Expression
  const isValidHeight = /^\d+$/.test(height);
  const isValidWeight = /^\d+$/.test(weight);

  if(isValidHeight && isValidWeight){
  setErr("")
  const heightInMeter = height / 100;
  const bmiValue = weight / (heightInMeter * heightInMeter);
  setBmi(bmiValue.toFixed(2));

  if(bmiValue < 18.5){
    setStatus("Under Weight")
  }else if(bmiValue >= 18.5 && bmiValue < 24.9){
    setStatus("Normal Weight")
  }else if(bmiValue >=25 && bmiValue < 29.9){
    setStatus("Over Weight")
  }else{
    setStatus("Obesity");
  }

  }else{
    setBmi(null);
    setStatus("");
    setErr("Please enter the correct Height & Weight data")
  }
}

  const clearAll=()=>{
    setHeight("");
    setWeight("");
    setBmi();
    setStatus();
  }


  return (
    <>
      <div className='bmi-container'>
        <div className='bmi-img'>
          <img src={bmiImg} alt="img" className='img'/>
        </div>
        <div className="bmi-calc">
          <h1>BMI Calculator</h1>

          {err && <p className='error'>{err}</p>}

          <div className='input-div'>
            <label htmlFor="height">Height (cm):</label>
            <input type="text" value={height} id='height' name='height' onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className='input-div'>
            <label htmlFor="weight">Weight (kg):</label>
            <input type="text" value={weight} id='weight' name='weight' onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button className='bmi-btn' onClick={calculateBmi}>Calculate BMI</button>
          <button className='clear-btn' onClick={clearAll}>Clear All</button>

          {bmi && <div className="bmi-res">
            <p>Your BMI is : {bmi}</p>
            <p>Status: {status}</p>
          </div>}

          <div className='footer'>
          <p>Designed by Suguna Priya</p>
        </div>
        </div>
      </div>
      
    </>
  )
}

export default App
