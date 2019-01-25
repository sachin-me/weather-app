import React, { Component } from "react";

class WeatherInfo extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { weatherInfo } = this.props;
    return (
      <div className="weather-detail__wrapper">
        {
          weatherInfo && weatherInfo.map((v, i) => {
            return (
              <div key={v.woeid} className="weather-details">
                <img src={`https://www.metaweather.com/static/img/weather/${v.weather_state_abbr}.svg`} alt=""/>
                <p>{v.applicable_date}</p>
                <p>Max Temp: {(v.max_temp).toFixed(2)}°c</p>
                <p>Min Temp: {(v.min_temp).toFixed(2)}°c</p>
                <p>Weather Status: {v.weather_state_name}</p>
                <p>wind speed: {(v.wind_speed).toFixed(2)}km/h</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default WeatherInfo;
