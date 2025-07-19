import {useEffect,useState} from "react";
import DataCom from "./DataCom";

let place = "chandigarh"

const Api = () => {
  const [weatherData,setWeatherData] = useState(null)
  const APIFunction = async () => {
  let api = `http://api.weatherapi.com/v1/current.json?key=cf51dc964df64ed6a09150120251907=${place}&aqi=no`
  let searchApi = `http://api.weatherapi.com/v1/search.json?key=cf51dc964df64ed6a09150120251907&q=del`
  
  try {
    let response = await fetch(api);
    let searchres = await fetch(searchApi)
    let searchData = await response.json(searchres)
    console.log(searchData);

    let data = await response.json();
    setWeatherData(data)
    
    console.log(data);
    // console.log(data.location.region);
    return data
  } catch (error) {
    console.log("Error while fetch api",error)
  }
 };
  
 useEffect(()=>{
  APIFunction()
 },[])
  
 let city = weatherData?.location?.name
 let region = weatherData?.location?.region
 let update = weatherData?.current?.last_updated
 let condition = weatherData?.current?.condition?.text
 let temp_f = weatherData?.current?.temp_f
 let temp_c = weatherData?.current?.temp_c

 


  return (
    <DataCom region={region} city={city} update={update} condition={condition} temp_c={temp_c} temp_f={temp_f} />
  )
};

export default Api;
