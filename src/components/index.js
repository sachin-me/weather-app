import React,  { Component } from "react";
import WeatherInfo from "./WeatherInfo";


class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      value: '',
      data: [],
      weatherInfo: []
    }
  }


  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    if (!this.state.value) return;
    e.preventDefault();
    const {value} = this.state;
    fetch(`https://www.metaweather.com/api/location/search/?query=${value}`)
    .then(res => res.json())
    .then(data => this.setState({
      data
    })
    )
  }

  handleClick = (e) => {
    let value = e.target.value;
    fetch(`https://www.metaweather.com/api/location/${value}`)
    .then(res => res.json())
    .then(data => {this.setState({
      weatherInfo: data.consolidated_weather
    })
    console.log(data.consolidated_weather)
    }
    )
  }

  render() {
    const {data} = this.state;
    return (
      <div>
        <form action="" className="form" onSubmit={this.handleSubmit} >
          <input type="search" value={this.state.value} name="search" id="search" onChange={this.handleChange} />
        </form>
        <div>
          <div name="" id="" className="select-title">
            <select name="" id="" onClick={this.handleClick} className="select">
              <option value="">select</option>
              {
                [data && data.map((v, i) => [
                  <option key={v.woeid} value={v.woeid}>{v.title}</option>
                ])]
              }
            </select>
          </div>
        </div>
        <div>
          <WeatherInfo weatherInfo={this.state.weatherInfo} />
        </div>
      </div>
    )
  }
}

export default Search;