import Modal from "react-modal";
import { ModalWrapper } from "./styles";

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0000',
    borderWidth: 0
  },
  overlay: {
    background: '#000a'
  }
};

Modal.setAppElement('#root');

export default function DefaultModal({ isVisible, setIsVisible, children }) {

  return (
    <Modal isOpen={isVisible} style={styles} onRequestClose={() => setIsVisible(false)}>
      <ModalWrapper className="animationShow">
        {children}
      </ModalWrapper>
    </Modal>
  )
} 