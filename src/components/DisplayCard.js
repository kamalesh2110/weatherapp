import React from 'react'

 const DisplayCard = ({weatherInfo}) => {
    console.log(weatherInfo)
  return (

    <div className='flex flex-col justify-between items-start m-4'>
        <h1> Today Weather </h1>
    <div  className='flex flex-col justify-center items-center'>
        <div  className='flex flex-row justify-between items-center gap-4'>
        <h1> Max temp</h1>
        <p>{weatherInfo.tempmax}</p>
        </div>
        <div  className='flex flex-row justify-center items-center gap-4'>
        <h1> Min temp</h1>
        <p>{weatherInfo.tempmin}</p>
        </div>
    </div>
    </div>
  )
}

export default DisplayCard
