import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Wrapper, Form, NextButton, LocationBtn } from './style';

const SearchScreen = ({ 
  getCity, city, getWeatherByCoordinates, textChanged
}) => {
  return (
    <Wrapper>
      <Form noValidate autoComplete="off" onSubmit={getCity}>
        <TextField
          style={{ width: '80%' }}
          id="outlined-basic"
          variant="outlined"
          label="Digite sua cidade"
          value={ city }
          onChange={(e) => textChanged(e.target.value)}
        />
        <NextButton>
        Continuar
        </NextButton>
      </Form>
      <LocationBtn onClick={ getWeatherByCoordinates }>Utilizar a localização atual</LocationBtn>
    </Wrapper>
  );
}

export default SearchScreen;