import styled from "styled-components";

export const Message = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryGreen};
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: 50px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
