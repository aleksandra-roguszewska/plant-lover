import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 1000;
  transition: all 0.2s ease;
`;

export const StyledModal = styled.div`
  position: fixed;
  width: 504px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border: 2px solid rgb(236, 241, 248);
  padding: 24px 36px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(66, 68, 90, 0.07);
  transition: all 0.2s ease;
`;
