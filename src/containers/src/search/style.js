import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LocationBtn = styled.button`
  position: relative;
  border-width: 0;
  margin-left: 5px;
  height: 30px;
  width: 56%;
  background-color: #98D1AF;
  border-radius: 10px;
  :hover {
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.19), 0 5px 50px 0 rgba(0,0,0,0.19);
  }
  margin-top: 10px;
  font-size: 14px;

  @media only screen and (min-width: 768px) {
    width: 30%;
    margin-top: 10px;
  }
`;

const NextButton = styled.button`
  position: relative;
  border-width: 0;
  margin-left: 5px;
  width: 80%;
  height: 58px;
  background-color: #98D1AF;
  border-radius: 10px;
  margin-top: 10px;

  :hover {
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.19), 0 5px 50px 0 rgba(0,0,0,0.19);
  }
  font-size: 14px;

  @media only screen and (min-width: 768px) {
    width: 20%;
    margin-top: 0px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export {
  Wrapper,
  LocationBtn,
  NextButton,
  Form
}