import { useEffect } from "react";
import "./Card.css"

export default function Card({
  weather, 
}) {
  useEffect(() => {
    console.log("check", weather);
  }, [weather])
  return weather?.cod === 200 ? (
    <div className="card">
      <img
        src={`https://www.countryflags.io/${weather.sys.country}/shiny/64.png`}
        alt="flag"
        className="flag"
      />
      <h3>{weather.name}</h3>
      <img
        className="icon"
        src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
      />
      <h2 className="description">{weather.weather[0].description}</h2>
      <p className="temp">
        {weather.main.temp}
        <sup>
          <span>&#176;</span>
        </sup>
        C
      </p>
      <div className="temp_container">
        <p className="temp_sub">
          <span className="temp_text">Min Temperature</span>
          {"  "}
          {weather.main.temp_min}
          <sup>
            <span>&#176;</span>
          </sup>
          C
        </p>
        <p className="temp_sub">
          <span className="temp_text">Max Temperature</span>
          {"  "}
          {weather.main.temp_max}
          <sup>
            <span>&#176;</span>
          </sup>
          C
        </p>
      </div>
    </div>
  ) : (
    <div>No data</div>
  )
}
