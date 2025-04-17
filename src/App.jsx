import UserContext from "./context/UserContext"; 
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <UserContext>
        <Home />
      </UserContext>
    </div>
  );
}

export default App;
