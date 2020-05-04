import React, { Component } from 'react';
import { Wrapper, Weather, DateRow, Divider, Temperature, InfoRow } from './style';

class WeatherScreen extends Component {

  getDay = (index) => {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days[index];
  }

  getDateString = (date) => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}.`;
  }

  isDay = () => {
    const hours = new Date(Date.now()).getHours();
    return hours >= 7 && hours <= 20 ? true : false;
  }

  getTemp = (temperature) => {
    return Math.round((temperature - 32) * (5 / 9))
  }

  render() {
    const currently = this.props.currently;
    const dateNow = new Date(Date.now());
    const syncDate = new Date(currently.time * 1000);

    return (
      <Wrapper>
        <Weather style={{ backgroundColor: '#98D1AF' }}>
          <DateRow>
            <h2>{this.props.city}</h2>
            <h4>{this.getDateString(syncDate)}</h4>
            <h4>Sincronizado às {`${syncDate.getHours()}h${syncDate.getMinutes()}min.`}</h4>
            <h4>Medido às {`${dateNow.getHours()}h${dateNow.getMinutes()}min.`}</h4>
          </DateRow>
          <Divider />
          <Temperature>
            <h2 style={{ marginBottom: 0, marginTop: '20px' }}>{`${Math.round(currently.temperature)}°C`}</h2>
            <h4 style={{ marginTop: 5 }}>{currently.summary}</h4>
          </Temperature>
          <Divider />
          <InfoRow>
            <h4>Humidade: {currently.humidity.toString().replace(/^0+./, '')}%</h4>
            <h4>Vel. do vento: {Math.round(currently.windSpeed)} km/h</h4>
            <h4>Prob. de chuva: {currently.precipProbability.toString().replace(/^0+./, '')}%</h4>
            <h4>Vol. de chuva: {Math.round(currently.intensityRain)} ml</h4>
          </InfoRow>
        </Weather>
      </Wrapper>
    );
  }
}

export default WeatherScreen;