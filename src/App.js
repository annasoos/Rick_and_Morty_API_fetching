import React from "react";
import "./App.css";
import Image from "./media/finger.png";
import Logo from "./media/logo.png";
import LandingPage from "./components/LandingPage/LandingPage";
import CharacterList from "./components/Character_list/Character_list";
import LocationList from "./components/Location_list/Location_list";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="header">
      <Link to="/"><img id="logo" src={Logo} alt="logo" /> <img id="middleFinger" src={Image} alt="secondary_image" /> </Link>
        <div className="button-container">
            <button>
              <Link to="/characters">Characters</Link>
            </button>
            <button>
              <Link to="/locations">Locations</Link>
            </button>
          </div>
      </div>

      <Switch>
          <Route exact path="/">
            <LandingPageF />
          </Route>
          <Route exact path="/characters">
            <CharactersF />
          </Route>
          <Route exact path="/locations">
            <LocationsF />
          </Route>
      </Switch>
      
    </Router>
  )
}

function LandingPageF() {
  return (<LandingPage />);
}
function CharactersF() {
  return (<CharacterList />);
}

function LocationsF() {
  return (<LocationList />);
}

export default App;


