import "./App.css";
import { Otp } from "./components/Otp";

function App() {
  return (
    <div className="h-screen bg-[#002b5b]">
      <br />
      <br />
      <br />
      <Otp number={20} />
    </div>
  );
}

export default App;
