import { CheckBoxEntry } from "../../lib/types/entry.types";

const CheckBox = ({ onChange, checked }: CheckBoxEntry) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      className="checkbox"
      onChange={onChange}
    />
  );
};

export default CheckBox;
