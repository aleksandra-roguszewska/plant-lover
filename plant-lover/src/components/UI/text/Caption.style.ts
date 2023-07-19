import styled from "styled-components";

export const CaptionBold = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryGreen};
`;

export const Caption = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryGreenGreen};
  opacity: 0.8;
`;
