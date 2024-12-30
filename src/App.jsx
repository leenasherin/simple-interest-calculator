
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'
Button
function App() {
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)
  
  const [invalidPrinciple,setInvalidPrinciple] = useState(false)
  const [invalidRate,setInvalidRate] = useState(false)
  const [invalidYear,setInvalidYear] = useState(false)

  const validateInputs=(tag)=>{
    console.log(typeof tag);
    const{name,value} = tag
    console.log(name,typeof value);
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    if(name=='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
         setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }
    }else if(name=='rate'){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidRate(false)
    }else{
      setInvalidRate(true)
    }
  }else if(name=='year'){
    setYear(value)
    if(!!value.match(/^\d+(\.\d+)?$/)){
      setInvalidYear(false)
  }else{
    setInvalidYear(true)
  }
}
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    console.log("inside Calculate");
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  const handleReset = ()=>{
    setInterest(0)
    setRate(0)
    setPrinciple(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }

  return (
    <>
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
    <div style={{width:'600px'}} className='bg-light rounded p-5'>
    <h3 className='text-center'>Simple Interest Calculator</h3>
    <p className='text-center'>Calculate Your Simple Interest Easily!</p>
    <div className='bg-warning p-3 text-light text-center rounded'>
      <h1>₹ {interest}</h1>
      <p className='fw-bolder'>Total Simple Interest</p>
    </div>
    <form className='mt-5'>
      {/*principle amount */}
      <div className='mb-3'>
      <TextField  value={principle || ""}  name='principle' onChange={e=>validateInputs(e.target)}  className='w-100' id="outlined-principle" label="Principle Amount" variant="outlined" />
      </div>
      
      {/*Invalid Principle */}
      {
        invalidPrinciple && <div className='text-danger fw-bolder mb-3'>
          Invalid Principle Amount
        </div>
      }

       {/*Rate */}
       <div className='mb-3'>
      <TextField  value={rate || ""} name='rate' onChange={e=>validateInputs(e.target)}   className='w-100' id="outlined-rate" label="Rate" variant="outlined" />
      </div>

      {/*Invalid Rate */}
      {
        invalidRate && <div className='text-danger fw-bolder mb-3'>
          Invalid Rate
        </div>
      }

       {/*Year */}
       <div className='mb-3'>
      <TextField  value={year || ""} name='year'  onChange={e=>validateInputs(e.target)}  className='w-100' id="outlined-year" label="Year" variant="outlined" />
      </div>

      {/*Invalid Year*/}
      {
        invalidYear && <div className='text-danger fw-bolder mb-3'>
          Invalid Year
        </div>
      }
       
       {/*Stack */}
       <Stack direction="row" spacing={2}>
       <Button  type='submit'  onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear}   style={{width:'50%' , height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
       <Button  onClick={handleReset}  style={{width:'50%' , height:'70px'}} className='border border-dark text-dark' variant="outlined">Reset</Button>
       </Stack>

    </form>
    </div>
    </div>
     
    </>
  )
}

export default App
