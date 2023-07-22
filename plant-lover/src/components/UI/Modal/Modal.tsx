import { ReactNode } from "react";
import ReactDom from "react-dom";
import { Overlay, StyledModal } from "./Modal.styled";

type ModalProps = {
  visible: boolean;
  children: ReactNode;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({ visible, children, setVisible }) => {
  if (!visible) return null;

  const portalElement = document.getElementById("portal") as HTMLElement;

  return ReactDom.createPortal(
    <>
      <Overlay onClick={() => setVisible(false)} className="overlay" />
      <StyledModal className="modal">{children}</StyledModal>
    </>,
    portalElement
  );
};

export default Modal;
