import { button } from "./styles";

export interface ButtonProps {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  return <button className={button} onClick={onClick}>{label}</button>;
};

export default Button;
