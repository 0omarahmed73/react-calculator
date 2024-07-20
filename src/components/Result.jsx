import { useContext } from "react";
import { CalculateContext } from "../contexts/CalculateContext";

function Result({ ...props }) {
  const { result } = useContext(CalculateContext);
  return (
    <div className="result" {...props}>
      <h1>{result}</h1>
    </div>
  );
}

export default Result;
