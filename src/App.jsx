import { useState } from 'react'
import './App.css'
import { Button, TextField } from '@mui/material'

function App() {
  const [principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const[isPrinciple,setIsPrinciple]=useState(true)
  const[isRate,setIsrate]=useState(true)
  const[isYear,setIsYear]=useState(true)
  const[interest,setInterest]=useState(0)
  
  const validate=(e)=>{
    const {name,value}=e.target
    console.log(name,value);
    
  
    // match(regExp) method is used to match the regular expression with the string.
    // if the string matches the regular expression then it returns the string otherwise it returns null.
    // ^[0-9a-zA-Z]*$ allows numbers and alphabets in a array.else returns null.
    // console.log(value.match('^[0-9]*$'));
    if (value.match('^[0-9]*$')){
      if(name=="principle"){
         setPrinciple(value)
         setIsPrinciple(true)
      }else if (name=="rate"){
        setRate(value)
        setIsrate(true)
      }else if(name=="year"){
        setYear(value)
        setIsYear(true)
      }

  }else{
    if(name=="principle"){
      setPrinciple(value)
      setIsPrinciple(false)
   }else if (name=="rate"){
     setRate(value)
     setIsrate(false)
   }else if(name=="year"){
     setYear(value)
     setIsYear(false)
   }

  }
  }
  const handlereset=()=>{
    setPrinciple(" ")
    setRate(" ")
    setYear(" ")
    setInterest(0)
    setIsPrinciple(true)
    setIsrate(true)
    setIsYear(true)
  }
  const calculate=()=>{
     setInterest((principle*rate*year)/100)
    }
  
  return (
    <>
      <div className='bg-dark d-flex justify-content-center align-item-center' style={{width:"100%",height:"110vh"}}>
        <div className='bg-warning p-5 rounded-3 m-5'>
          <h1 className='text-center'>Simple Interest</h1>
          <h5>Calculate your simple interest easily</h5>
          <div className='bg-secondary p-5 mt-4 d-flex rounded flex-column text-center'>
            <h1 id='value' className='mt-3'> ₹{interest}</h1>
            <p>Total simple interest</p>
            <div className='mb-3'>
            <TextField onChange={(e)=> validate(e)} value={principle} name='principle' id="outlined-basic" label="Principle Amount" variant="outlined"/>
            {isPrinciple ==false && <p className='text-danger'>Invalid Input</p>}
            </div>
            <div className='mb-3'>
            <TextField onChange={(e)=> validate(e)} value={rate} name='rate' id="outlined-basic" label="Rate Of Interest" variant="outlined" />
            {isRate ==false && <p className='text-danger'>Invalid Input</p>}
            </div>
            <div className='mb-3'>
            <TextField onChange={(e)=> validate(e)} value={year} name='year' id="outlined-basic" label="Year" variant="outlined" />
            {isYear==false && <p className='text-danger'>Invalid Input</p>}
            <div className='d-flex justify-content-center mt-3'>
              <Button disabled={  principle && rate && year? false:true} onClick={calculate} variant="outlined"style={{ backgroundColor:"gold", color:"black"}} className='me-1'>Calculate</Button>
              <Button onClick={handlereset} variant="contained"style={{ backgroundColor:"gold", color:"black"}}>Reset</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
