import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function SearchBox ({updatedata})  {

  let [city,setCity] = useState("");
  let [error,setErr] = useState(false);



  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY = "0faa6c5b385957fa0b5a8be09c105002";

  let WeatherInfo = async () => {

    try {
      let resp = await fetch (
        `${API_URL}?q=${city}&appid=${API_KEY }&units=metric
        `);
      let jsonResp = await resp.json();
  
      let result ={
        city : city,
        feels_like : jsonResp.main. feels_like,    
        humidity : jsonResp.main.humidity,
        temp : jsonResp.main.temp,    
        temp_max :  jsonResp.main.temp_max,
        temp_min : jsonResp.main.temp_min,
        weather :jsonResp.weather[0].description
      }
      console.log(result);
      return result;

    } catch (error) {
      console.log("Not Found API");
    }
  }

  let cityChange = (event) => {
    setCity(event.target.value)
  }

  let citySubmit = async(event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
  
      let updateinfo = await WeatherInfo()
      updatedata(updateinfo);
    } catch (error) {
      setErr(true);
    }
  }


  return (
    <div className="text-center mt-4">
      <form onSubmit={citySubmit} >
        <TextField id="city"
        label=" Search for a City Name" variant="outlined" 
        value ={city}
        onChange={cityChange}
        required/>

        <Button variant="contained" 
        type="submit"
        size="large"
        style={{ padding: 10, marginLeft:30, marginBottom:10 , marginTop:5}}>Add City </Button>

        {
          error && 
          <p style={{color : 'red'}}>
            NO such place exists
          </p>
        }

      </form>
    </div>
  )
}

export default SearchBox
