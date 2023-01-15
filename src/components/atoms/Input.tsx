import { InputEntry } from "../../lib/types/entry.types";

const Input = ({
  className,
  label,
  type,
  placeholder,
  required = true,
}: InputEntry) => {
  return (
    <>
      <label className="input-group my-4">
        <span className="w-32">{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          className={`input input-bordered ${className}`}
          required={required}
        />
      </label>
    </>
  );
};

export default Input;
