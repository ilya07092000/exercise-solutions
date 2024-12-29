import ConfirmationModal from '@/exercices/modal/ConfirmationModal/ConfirmationModal';
import {useState} from 'react';

const ModalPage = () => {
  const [counter, setCounter] = useState(0);

  const [isOpenConfirmationModal, setIsOpenConfirmationModal] = useState(false);
  const modalToggler = () => setIsOpenConfirmationModal(curr => !curr);

  return (
    <div>
      {isOpenConfirmationModal && (
        <ConfirmationModal
          isOpen={isOpenConfirmationModal}
          onClose={modalToggler}
          onConfirm={() => console.log('confirmed')}
          headerText={'Are You Sure?'}
        >
          Test Body
        </ConfirmationModal>
      )}

      <button onClick={modalToggler}>Open</button>
      <button onClick={() => setCounter(curr => curr + 1)}>Increment</button>
    </div>
  );
};

export default ModalPage;
