/* eslint-disable react/prop-types */
const CustomButton = (props) => {
  return (
    <button
      style={{
        boxShadow: "2px 2px 4px #000",
        border: "none",
        background: "none",
        padding: "10px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        margin:props.margin,
      }}
      {...props}
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
