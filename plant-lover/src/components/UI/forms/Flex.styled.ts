import styled from "styled-components";

type FlexProps = {
  flexDirection?: string;
  gap?: string;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: ${({ gap }) => (gap ? gap : "0.625rem")};
`;
