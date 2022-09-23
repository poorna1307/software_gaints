import { useEffect, useState } from 'react'
import axios from 'axios';
import '../imageofday/Imageofday.css';

function Imageofday(){
  const [nasadata,setnasadata]=useState()
  const [imageurl,setimageurl]=useState()
  const [title,settitle]=useState()
  const [date,setdate]=useState()
  useEffect(()=>{
    const fetchnasa=async()=>{
      const key="7q34DGOwtzpGFLCnoUyKcGKIwHxSS2riVZhWYO2V"
      const result=await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      setnasadata(result?.data.explanation)
      setimageurl(result?.data.url)
      settitle(result.data.title)
      setdate(result.data.date)
    }
    fetchnasa()
  }
  ,[])
  return (
    <div className='container imageComponent'>
      <h1 className='m-3'>{title}</h1>
      <h3 className='m-3'>Date : {date}</h3>
      <div className='m-3'>
        <img className="imageOfDay d-block mx-auto border-5 rounded" src={imageurl} alt=""/>
      </div>
      <h3 className='m-3'>About Image: </h3>
      <p className='lead m-3'>{nasadata}</p>
    </div>
  )

  }
  export default Imageofday;