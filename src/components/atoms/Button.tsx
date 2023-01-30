import { ButtonEntry } from "../../lib/types/entry.types";

const Button = ({ onClick, type, className, children }: ButtonEntry) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
