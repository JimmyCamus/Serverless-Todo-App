import { CheckBoxEntry } from "../../lib/types/entry.types";

const CheckBox = ({ onClick, checked }: CheckBoxEntry) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      className="checkbox"
      onClick={onClick}
    />
  );
};

export default CheckBox;
