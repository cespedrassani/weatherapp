import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { Error, DialogCities } from './components';
import { WeatherScreen, SearchScreen } from './containers';
import { AppBar, IconButton, Toolbar, SvgIcon } from '@material-ui/core';
import BounceLoader from "react-spinners/BounceLoader";
import { Application, Card, Loader } from './style';

const apiKey = 'cc57eded744c264838f0f10fec22fca4';

class App extends Component {
  state = {
    city: '',
    cities: [],
    weather: null,
    error: {
      state: false,
      message: ''
    },
    modalVisible: false,
    loading: false
  }

  componentDidMount = () => {
    this.getLocalStorage()
  }

  getLocalStorage = () => {
    const expiresIn = window.localStorage.getItem('expiresIn');
    const weather = window.localStorage.getItem('weather');
    const city = window.localStorage.getItem('city');     
    
    this.setState({
      city: city ? city : '',
      weather: weather ? JSON.parse(weather) : null,
    })

    if (!expiresIn && new Date(parseInt(expiresIn, 10)) < new Date(Date.now())){
      this.getWeatherByCoordinates(weather);
    }
  }

  getCity = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.city}&key=855f5fcfe216455e9787081b236ccde8`);

      if (response.ok) {
        const json = await response.json();
        
        this.setState({ cities: json.results, modalVisible: true });
      } else {
        this.setState({ error: { state: true }, loading: false });
      }
    } catch (error) {
      this.setState({ error: { state: true }, loading: false });
    }
  }

  getUserLocation = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    });
  }

  getWeatherByCoordinates = async (coords = {}) => {
    this.setState({ modalVisible: false })
    try {
      if (!coords.lat){
        coords = await this.getUserLocation();
      }

      this.setState({ loading: true })

      const city = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${coords.lat}+${coords.lng}&key=855f5fcfe216455e9787081b236ccde8`)
      
      if (city.ok) {
        const json = await city.json();
        window.localStorage.setItem('city', json.results[0].components.city);
        this.setState({ city: json.results[0].components.city });
      } else {
        this.setState({ error: { state: true }, loading: false });
      }

      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${coords.lat},${coords.lng}?lang=pt&units=ca`);

      if (response.ok) {
        const json = await response.json();
        json.currently.intensityRain = json.daily.data[0].precipIntensityMax;
        json.currently.lat = json.latitude;
        json.currently.lng = json.longitude;
        window.localStorage.setItem('weather', JSON.stringify(json.currently));
        const newDate = new Date(Date.now())
        window.localStorage.setItem('expiresIn', newDate.setMinutes(newDate.getMinutes() + 15))
        this.setState({ city: this.state.city, weather: json.currently, loading: false });
      } else {
        this.setState({ error: { state: true }, loading: false });
      }
    } catch (error) {
      this.setState({ error: { state: true }, loading: false });

    }
  }

  handleCityInput = (city) => {
    this.setState({ city });
  }

  clear = () => {
    this.setState({ city: '', weather: null, error: { state: false } });
    window.localStorage.clear();
  }

  render() {
    const { weather, error, loading, city } = this.state
    const cardContent = weather
      ? <WeatherScreen
        back={ this.clear }
        currently={weather }
        city={ city }
      />
      : <SearchScreen
        getCity={ this.getCity }
        getWeatherByCoordinates={this.getWeatherByCoordinates }
        textChanged={ this.handleCityInput }
        city={ city }
      />;

    return (
      <MuiThemeProvider>
        <Application>
          <Card>
            {(weather || error.state) &&
              <AppBar style={{ backgroundColor: "#98D1AF", marginBottom: -20 }} position="static">
                <Toolbar variant="dense">
                  <IconButton onClick={this.clear}>
                    <SvgIcon>
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
                    </SvgIcon>
                  </IconButton>
                </Toolbar>
              </AppBar>
            }
            { loading 
            ? <Loader>
                <BounceLoader
                  color="#98D1AF"
                  loading={true}
                />
              </Loader> 
            : !error.state ? cardContent : <Error message={error.message} /> }
          </Card>
        </Application>
        <DialogCities
          city={this.state.city}
          cities={this.state.cities} 
          open={this.state.modalVisible} 
          onClose={(city) => this.setState({ city, modalVisible: false })} 
          getWeatherByCoordinates={this.getWeatherByCoordinates}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;