import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './modal-header.module.css';

function ModalHeader({ children, onClose }) {
  return (
    <div className={`${styles.modalHeader} ml-10 mr-10 mt-10`}>
      <p className="text text_type_main-large">{children}</p>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default ModalHeader;
