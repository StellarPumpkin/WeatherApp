import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const Apikey = "43a152006868d5e42d45038e38fca475";

class App extends React.Component {
  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    
    const city = e.target.elements.city.value;
    e.preventDefault();
    const apicall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}`);
    const response =await apicall.json();
    this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
  error: ""
})
    
    console.log(response);
  }
  render() {
    return (
      <div >
        <div><Titles /></div>
        <div><Form loadWeather={this.getWeather} /></div>
        <div><Weather 
        temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}/></div>
        
      </div>
    )
  }
}
export default App;