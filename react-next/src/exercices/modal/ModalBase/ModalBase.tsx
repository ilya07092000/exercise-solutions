import {createPortal} from 'react-dom';
import styles from './styles.module.css';

const ModalBase = ({
  isOpen,
  header,
  body,
  footer,
}: {
  isOpen: boolean;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}) => {
  return (
    isOpen &&
    createPortal(
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, .5)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '300px',
            height: '300px',
            transform: 'translate3d(-50%, -50%, 0)',
            display: 'flex',
            background: 'white',
          }}
        >
          <div style={{margin: 'auto'}}>
            {header}
            {body}
            {footer}
          </div>
        </div>
      </div>,
      document.body,
    )
  );
};

export default ModalBase;
