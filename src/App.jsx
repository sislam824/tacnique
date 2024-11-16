import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./context/UserContext";
import UserBoard from "./pages/UserBoard";
import Nav_Bar from "./components/Nav_Bar";
function App() {
  return (
    <UserProvider>
      <Nav_Bar />

      <UserBoard />
    </UserProvider>
  );
}

export default App;
