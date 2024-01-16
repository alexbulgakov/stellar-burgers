import styles from './modal-back-drop.module.css';

function ModalBackDrop({ onClose }) {
  return <div className={styles.modalBackDrop} onClick={onClose}></div>;
}

export default ModalBackDrop;
