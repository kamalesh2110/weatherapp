import axios from "axios";


export const weatherAPIdetailcall=async(city)=>{
    const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current%2Cdays&key=2NV4BAFJXYTH9JSJALJJSL7WH&contentType=json`
    try{
        const data= await axios.get(url)
        return data
    }
    catch(err){
        console.log(err)
    }

}