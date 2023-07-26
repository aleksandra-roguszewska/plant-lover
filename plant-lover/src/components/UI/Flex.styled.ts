import styled from "styled-components";

type FlexProps = {
  $flexdirection?: "row" | "column";
  $gap?: string;
  $justifycontent?: "center" | "flex-end" | "flex-start" | "space-between";
  $alignitems?: "center" | "flex-end" | "flex-start";
  $height?: string;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ $flexdirection }) =>
    $flexdirection ? $flexdirection : "row"};
  justify-content: ${({ $justifycontent }) =>
    $justifycontent ? $justifycontent : "flex-start"};
  align-items: ${({ $alignitems }) =>
    $alignitems ? $alignitems : "flex-start"};
  gap: ${({ $gap }) => ($gap ? $gap : "0.625rem")};
  width: 100%;
  height: ${({ $height }) => ($height ? $height : "auto")};
`;
