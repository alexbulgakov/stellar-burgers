import ReactDOM from 'react-dom';

import ModalBackDrop from '../modal-back-drop/modal-back-drop';
import ModalHeader from '../modal-header/modal-header';

import styles from './modal.module.css';

function Modal({ header = '', children, onClose }) {
  const modalRoot = document.getElementById('react-modals');

  return ReactDOM.createPortal(
    <>
      <ModalBackDrop onClose={onClose} />
      <div className={styles.modal}>
        <ModalHeader onClose={onClose}>{header}</ModalHeader>
        {children}
      </div>
    </>,
    modalRoot,
  );
}

export default Modal;
