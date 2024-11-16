import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./context/UserContext";
import UserBoard from "./pages/UserBoard";
function App() {
  return (
    <UserProvider>
      <UserBoard />
    </UserProvider>
  );
}

export default App;
