import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #98D1AF;
    @media (max-width: 1000px) {
      background-color: white;
    }
  }
`

const Application = styled.div`
  text-align: center;
  height: 100vh;
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 100%;
    height: window.screen.height - 48;
  }
`;

const Card = styled.div`
  position: relative;
  top: 50%;
  margin-top: -300px;
  height: 600px;
  background-color: white;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .25);
  @media (max-width: 1000px) {
    top: 0;
    margin-top: 0;
    box-shadow: none;
    height: inherit;
  }
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 550px;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
    height: inherit;
  }
`;

export {
  GlobalStyle,
  Application,
  Card,
  Loader
}