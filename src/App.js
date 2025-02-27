
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Speakers from "./Components/Speaker/Speakers";
import Sponsors from "./Components/Sponsors/Sponsors";
import SponsorsMain from "./Components/Sponsors/SponsorsMain";
import Team from "./Components/Team/Team";
import Timeline from "./Components/Timeline/Timeline";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar/>
       <Router>
          <Navbar sticky="top"/>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='#about' exact component={About} />
            <Route path='#Speakers'exact component={Speakers} />
            <Route path='/sponsor'exact component={Sponsors} />
            <Route path='#Timeline'exact component={Timeline} />
            <Route path='#Team'exact component={Team} />
            <Route path='/Gallery' exact> <Gallery/> </Route>
            <Route path='#Footer'exact component={Footer} />
          </Switch>
        </Router>
      <About />
      <Speakers />
      <Timeline/>
      <SponsorsMain />
      <Team />
      <Footer />
    </div>
    
    
  );
}

export default App;
