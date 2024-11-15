import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav_Bar from "./components/Nav_Bar";
import User_List from "./components/User_List";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <UserProvider>
      <Nav_Bar />
      {/* <User_card name="saif" age="24" email="saifulIslam" /> */}

      <User_List />
    </UserProvider>
  );
}

export default App;
