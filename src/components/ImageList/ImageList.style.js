import styled, { keyframes } from "styled-components";
import Popup from "reactjs-popup";
import backgroundimage from "../assets/images/background-image.jpg";
import { NavButton } from "../Form/GeneralForm.style";

const simple = keyframes`
    50% {
      transform: translateX(10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(10px);
      opacity: 0;
    }
  `;

const simple1 = keyframes` 
    50% {
      transform: translateX(-10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(-10px);
      opacity: 0;
    }
  `;

const entry = keyframes` 
    0% {
      top: -20%;
      opacity: 0.1;
    }
    100% {
      top: 0%;
    }
  `;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 80px auto
  max-width: 1000px;
  width: 100%;
  gap: 20px;
  animation: resize 3000ms ease infinite;
  &:before {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;
    width: 105%;
    height: 105%;
    top: -20px;
    left: -20px;
    filter: blur(2px);
    background-size: 100% 100%;
    background-image: url(${backgroundimage});
    background-repeat: no-repeat;
  }
`;

const ImageElement = styled.div``;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  transition: 0.5s all ease;
  transform: rotateX(30deg) scale(0.7);
  // perspective: 900px;
  box-shadow: -13px 10px 16px 5px rgba(0, 0, 0, 0.4);
  position: relative;
  top: 0%;
  animation: ${entry} 2s linear 1;
  border-radius: 38% 62% 39% 61% / 83% 46% 54% 17%;
  &:hover {
    cursor: pointer;
    box-shadow: none;
    transform: rotate(0deg) scale(1) translateY(10px);
    transition: 0.5s all ease;
    z-index: 2;
    border-radius: 0;
  }
`;

const ImageCanvas = styled.canvas`
  width: 300px;
  height: 200px;
  transition: 0.5s all ease;
  transform: rotateX(30deg) scale(0.7);
  box-shadow: -13px 10px 16px 5px rgba(0, 0, 0, 0.4);
  position: relative;
  top: 0%;
  animation: ${entry} 2s linear 1;
  border-radius: 38% 62% 39% 61% / 83% 46% 54% 17%;
  &:hover {
    cursor: pointer;
    box-shadow: none;
    transform: rotate(0deg) scale(1) translateY(10px);
    transition: 0.5s all ease;
    z-index: 2;
    border-radius: 0;
  }
`;

const Hover = styled.div`
  position: relative;
  text-align: center;
  max-width: 260px;
  width: 100%;
  margin: 0 auto;
`;

const HoverList = styled.ul``;

const HoverArrow = styled.li`
  position: absolute;
  list-style: none;
  color: #111;
  top: 3px;
  &:nth-child(1) {
    left: -7%;
    animation: ${simple1} 1s linear infinite;
  }
  :nth-child(2) {
    right: -7%;
    animation: ${simple} 1s linear infinite;
  }
`;

const PopupContent = styled.div`
  max-width: 700px;
  max-height: 700px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const PopupImage = styled.img`
  max-width: 700px;
  max-height: 700px;
  width: 100%;
  height: auto;
  object-fit: fill;
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #fff;
  border-radius: 18px;
`;

const StyledPopup = styled(Popup)`
  &-content {
    width: 100%;
    max-width: 700px;
  }
  @media (max-width: 768px) {
    &-content {
      width: 80%;
    }
  }
`;

const Button = styled(NavButton)`
  float: right;
  margin-top: 0;
`;

export {
  Wrapper,
  Image,
  ImageElement,
  Hover,
  HoverList,
  HoverArrow,
  PopupContent,
  PopupImage,
  CloseButton,
  StyledPopup,
  ImageCanvas,
  Button,
};
