import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Booking from "../Pages/Booking";
import Error from "../Pages/Error";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/booking/:slug" component={Booking} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;