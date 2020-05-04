import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  height: 550px;
  color: rgba(0, 0, 0, 0.70);
  align-items: center;
  @media (max-width: 700px) {
    text-align: center;
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: inherit;
  }
`;

const DateRow = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 500;
  }
  @media (max-width: 870px) {
    h4 {
      font-size: 16px;
    }
  }
`;

const InfoRow = styled.div`
   h4 {
    font-size: 20px;
    font-weight: 500;
  }
  @media (max-width: 870px) {
    h4 {
      font-size: 16px;
    }
  }
`;

const Temperature = styled.div`
  font-size: 60px;
  h4 {
    font-size: 20px;
    font-weight: 500;
  }
  @media (max-width: 870px) {
    font-size: 30px;
    h4 {
      font-size: 16px;
    }
  }
`;

const Weather = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  padding: 10px;
  border-radius: 20px;
  justify-content: space-around;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-around;
    margin-top: 50px;
  }
`;

const Divider = styled.hr`
  width: 0;
  @media (max-width: 700px) {
    width: 50%;
    border-color:rgba(0, 0, 0, 0.30);
  }
`;

export {
  Wrapper,
  DateRow,
  InfoRow,
  Temperature,
  Weather,
  Divider
}