import { InputEntry } from "../../lib/types/entry.types";

const Input = ({
  className,
  type,
  placeholder,
  onChange,
  required = true,
}: InputEntry) => {
  return (
    <>
      <label className="input-group my-4">
        <input
          type={type}
          placeholder={placeholder}
          className={`input ${className}`}
          required={required}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Input;
