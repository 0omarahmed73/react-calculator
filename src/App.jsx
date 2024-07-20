import Buttons from "./components/Buttons";
import Result from "./components/Result";

function App() {
  return (
    <>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="calcContainer">
        <Result result={`20 + 30`} />
        <Buttons />
      </div>
    </>
  );
}

export default App;

