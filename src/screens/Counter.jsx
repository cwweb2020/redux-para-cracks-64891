import useCounter from "../hooks/useCounter";
import CustomButton from "../shared/CustomButton";

const CounterScreen = () => {
  const {
    counts,
    handleSumar,
    handleResetear,
    handleRestar,
    handleChange,
    handleSetCustomNumber,
  } = useCounter();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ textAlign: "center" }}>CounterScreen</h1>

      <div style={{ margin: "40px 0" }}>
        <h3 style={{ textAlign: "center" }}>Custom Number</h3>
        <input onChange={handleChange} type="number" />
        <CustomButton
          onClick={handleSetCustomNumber}
          margin="0 10px"
          text="Setear"
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <CustomButton onClick={handleRestar} text="restar" />
        <h2> {counts}</h2>
        <CustomButton onClick={handleSumar} text="sumar" />
      </div>
      <div>
        <CustomButton
          onClick={handleResetear}
          margin="20px 0"
          text="resetear"
        />
      </div>
    </div>
  );
};

export default CounterScreen;
