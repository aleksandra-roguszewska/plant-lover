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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border: 5.192px solid ${({ theme }) => theme.colors.primaryGreen};
  padding: 24px 36px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 1px 1px 10px rgba(66, 68, 90, 0.07);
  transition: all 0.2s ease;
  font-size: 0.875rem;
  padding: 42 40px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  button {
    display: flex;
    width: 200px;
    height: 40px;
    padding: 0px 42px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: ${({ theme }) => theme.colors.secondaryGreen};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
  }
`;
