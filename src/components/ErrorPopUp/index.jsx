import './styles.css';
import IconDangerAlert from '../../assets/danger-alert.svg';
import { useEffect } from 'react';

function ErrorPopUp({ text, handleClose }) {

  useEffect(() => {
    if (text) {
      setTimeout(() => {
        handleClose('');
      }, 3000);
    }
  }, [text]);

  return (
    <div className="error-popup">
      <img src={IconDangerAlert} alt="alert" />
      <p>{text}</p>
    </div>
  );
}

export default ErrorPopUp;