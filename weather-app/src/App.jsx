import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";

import SearchBox from "./Components/searchBox/SearchBox";

import Data from "./Components/data/Data";

function App() {

  const [weather,SetWeatherInfo] = useState(
    {
      city : "Nagpur",
      feels_like : 30,
      humidity  : 40,
      temp  :29,
      temp_max  :33.11,
      temp_min  :16.11,
      weather :"sunny"
    }
  );

  let updatedata =(updateinfo) => {
    SetWeatherInfo(updateinfo)

  }

  return (
    <>
      <h2 className="text-center mt-3 text-uppercase">Weather   App
      </h2>
      <SearchBox updatedata={updatedata }/>
      <Data data={weather}/>
    </>
  )
}

export default App
