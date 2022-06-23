import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import Tweets from "./Components/Tweets";
import ViewTweet from "./Components/ViewTweet";

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Tweets />} />
          <Route path="/:user/:id" element={<ViewTweet />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
