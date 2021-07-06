import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavbarSignedOut from "./components/NavbarSignedOut";

function App() {
  return (
    <div className="App">
      <NavbarSignedOut />
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
