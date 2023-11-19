import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    transform: 'translate(-50%, -50%)',
    border: 'none',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({ isModalOpen, imageUrl, description, closeModal }) => {
  return (
    <ReactModal
      style={customStyles}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Image modal"
    >
      <img src={imageUrl} alt={description}></img>
    </ReactModal>
  );
};
