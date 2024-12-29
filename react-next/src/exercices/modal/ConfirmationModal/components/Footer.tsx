interface IFooterProps {
  onConfirm: () => any;
  onClose: () => any;
}

const Footer = ({onConfirm, onClose}: IFooterProps) => (
  <div>
    <button onClick={onConfirm}>Confirm</button>|
    <button onClick={onClose}>Close</button>
  </div>
);

export type {IFooterProps};
export default Footer;
