import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginForm = styled.section`
  width: 520px;
  left: calc(50% - 520px / 2);
  top: 222px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;

export const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0 0 20px 0;
  font-size: 24px;
  font-weight: normal;
  color: #0d0d0d;
`;

export const Button = styled.button`
  background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  width: 100px;
  height: 40px;
  border: none;
  &:focus {
    background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }
  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }
  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }
  &:disabled {
    background: linear-gradient(0deg, #c4c4c4, #c4c4c4), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%);
  }
`;
