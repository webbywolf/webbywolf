import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
