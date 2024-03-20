import React, { useState } from 'react'
import {weatherAPIdetailcall} from './../service/weatherdetails.api'
import DisplayCard from './DisplayCard'
export const SearchComponent = () => {
    const [cityName,setCityName]=useState('')
    const [weatherInfo,setWeatherInfo]=useState({})
    const cityNameHandler=(value)=>{
        setCityName(value)
    }
    const weatherAPIDetails= async()=>{
         const weatherdetails = await weatherAPIdetailcall(cityName)
         setWeatherInfo(weatherdetails.data.days[0]) 
    }
  return (
    <div>
        <input type='text' placeholder='Enter City Name' onChange={(e)=>{
            cityNameHandler(e.target.value)
        }}></input>
        <button onClick={()=>{
            weatherAPIDetails()
        }}>
            Get Weather Details
        </button>

        {
            Object.keys(weatherInfo).length>0 && 
            <DisplayCard weatherInfo={weatherInfo}/>
        }


    </div>
  )
}
