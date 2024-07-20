import { useContext, useState } from "react";
import Button from "./Button";
import { CalculateContext } from "../contexts/CalculateContext";

function Buttons() {
  const { reset, removeChar, addBtnText, setOperator, calcResult } =
    useContext(CalculateContext);
  const [btns, setButtons] = useState([
    "AC",
    "DEL",
    "/",
    "x",
    "7",
    "8",
    "9",
    "-",
    "6",
    "5",
    "4",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
  ]);
  return (
    <div className="btns">
      {btns.map((el) => (
        <Button
          key={el}
          text={el}
          onClick={
            el === "AC"
              ? reset
              : el === "DEL"
              ? removeChar
              : ["/", "x", "+", "-"].includes(el)
              ? () => {
                  setOperator(el);
                  addBtnText(el);
                }
              : el === "="
              ? calcResult
              : () => addBtnText(el)
          }
        />
      ))}
    </div>
  );
}

export default Buttons;
