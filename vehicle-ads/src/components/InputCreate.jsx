import "../styles/modal.css";
import "../styles/input.css";

function InputCreate({ value, onChange, ...inputProps }) {
  const { label, name } = inputProps;
  return (
    <div className="inputCreate">
      <label htmlFor={name}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        value={value}
        className="inputProps"
      />
    </div>
  );
}

export default InputCreate;
