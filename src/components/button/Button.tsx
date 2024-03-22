import css from "./classnames";

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ label, onClick, disabled }: ButtonProps): JSX.Element => (
  <button className={css.button} onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default Button;
