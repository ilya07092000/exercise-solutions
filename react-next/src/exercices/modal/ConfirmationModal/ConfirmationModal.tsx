import ModalBase from '../ModalBase/ModalBase';
import Header from './components/Header';
import Footer, {IFooterProps} from './components/Footer';

interface IConfirmationModalProps extends IFooterProps {
  isOpen: boolean;
  headerText: string;
  children?: React.ReactNode;
  header?: React.ReactNode;
}

const ConfirmationModal = ({
  isOpen,
  headerText,
  onClose,
  onConfirm,
  children,
  header = <Header text={headerText} />,
  ...rest
}: IConfirmationModalProps) => {
  return (
    <ModalBase
      isOpen={isOpen}
      header={header}
      footer={<Footer onClose={onClose} onConfirm={onConfirm} />}
      body={children}
      {...rest}
    />
  );
};

export default ConfirmationModal;
