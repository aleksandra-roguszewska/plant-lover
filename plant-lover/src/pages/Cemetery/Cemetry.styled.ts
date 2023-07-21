import styled from "styled-components";

export const Overlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999; /* Ensure the overlay is above other content */
  pointer-events: none; /* Allows click-through to the underlying content */
  background: #f3f3f3;
  mix-blend-mode: luminosity;
`;
