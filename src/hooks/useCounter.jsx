import { useDispatch, useSelector } from "react-redux";
import {
  resetear,
  restarUno,
  setCustomNumber,
  sumarUno,
} from "../slicies/counterSlice";
import { useState } from "react";

const useCounter = () => {
  const [temp, setTemp] = useState(1);
  const { counts } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  const handleChange = (e) => setTemp(Number(e.target.value));
  const handleSumar = () => dispatch(sumarUno());
  const handleRestar = () => {
    if (counts < 1) {
      return;
    }
    dispatch(restarUno());
  };
  const handleResetear = () => {
    if (counts < 1) {
      return;
    }
    dispatch(resetear());
  };
  const handleSetCustomNumber = () => dispatch(setCustomNumber(temp));

  return {
    counts,
    handleSumar,
    handleResetear,
    handleRestar,
    handleChange,
    handleSetCustomNumber,
  };
};

export default useCounter;
