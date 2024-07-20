import { createContext, useEffect, useState } from "react";

export const CalculateContext = createContext();

const CalculateProvider = ({ children }) => {
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState("");
  const reset = () => setResult("0");
  const removeChar = () => setResult((el) => el.slice(0, -1));
  const addBtnText = (text) => {
    if (!["AC", "DEL", "="].includes(text)) {
      if (result == 0) {
        if (["+", "/", "x", "-"].includes(text)) {
          setResult(0);
        } else {
          setResult(text);
        }
      } else if (
        !result.includes("-") &&
        !result.includes("+") &&
        !result.includes("/") &&
        !result.includes("x")
      ) {
        setResult((el) => (el += text));
      } else {
        setResult(
          (el) => (el += ["/", "x", "+", "-"].includes(text) ? "" : text)
        );
      }
    }
  };
  const calcResult = () => {
    if (operator !== "") {
      const firstNumber = Number(result.split(operator)[0]);
      const secondNumber = Number(result.split(operator)[1]);
      setResult(
        operator === "+"
          ? firstNumber + secondNumber
          : operator === "-"
          ? firstNumber - secondNumber
          : operator === "x"
          ? firstNumber * secondNumber
          : firstNumber / secondNumber
      );
      setResult((el) => el.toString());
    }
  };
  useEffect(() => {
    if (result === "") setResult(0);
  }, [result]);

  return (
    <CalculateContext.Provider
      value={{
        result,
        setResult,
        reset,
        removeChar,
        addBtnText,
        setOperator,
        calcResult,
      }}
    >
      {children}
    </CalculateContext.Provider>
  );
};

export default CalculateProvider;
