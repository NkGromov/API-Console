import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const Spiner = styled.div`
    color: #FFFFFF;
    display: inline-block;
    position: relative;
    width: 48px;
    height: 24px;
    div {
        transform-origin: 22px 15px;
        animation: ${rotate} 1.2s linear infinite;
    }
    div:after{
        content: " ";
        display: block;
        position: absolute;
        top: 3px;
        left: 21px;
        width: 2px;
        height: 7px;
        border-radius: 20%;
        background: #fff;
    }
    div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
      }
    div:nth-child(2) {
        transform: rotate(45deg);
        animation-delay: -1s;
      }
    div:nth-child(3) {
        transform: rotate(90deg);
        animation-delay: -0.9s;
      }
    div:nth-child(4) {
        transform: rotate(135deg);
        animation-delay: -0.8s;
      }
    div:nth-child(5) {
        transform: rotate(180deg);
        animation-delay: -0.7s;
      }
    div:nth-child(6) {
        transform: rotate(225deg);
        animation-delay: -0.6s;
      }
    div:nth-child(7) {
        transform: rotate(270deg);
        animation-delay: -0.5s;
      }
    div:nth-child(8) {
        transform: rotate(315deg);
        animation-delay: -0.4s;
      }
   
`