import "./App.css";
import CounterButtons from "./component/CounterButtons";
import CounterDisplay from "./component/CounterDisplay";
import { CounterProvider } from "./contexts/CounterContext";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center">
        <h1>React-useContext-CounterApp</h1>
        <CounterProvider>
          <div>
            <CounterDisplay />
            <CounterButtons />
          </div>
        </CounterProvider>
      </div>
    </>
  );
}

export default App;
