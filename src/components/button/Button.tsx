import css from "./classnames";

export interface ButtonProps {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={css.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
