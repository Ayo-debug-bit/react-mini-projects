import React from "react";
function Weather({data}) {
    return(
        <div class="weather-box">
            <h2> {data.name}, {data.sys.country} </h2>
            <h3> {Math.round(data.main.temp)} Celcius </h3>
            <p> {data.weather[0].description} </p>
            <p> Humidity: {data.main.humidity}% </p>
            <p> Wind: {data.wind.speed} m/s </p>
        </div>
    );
}

export default Weather