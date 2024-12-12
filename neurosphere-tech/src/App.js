import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/technologies" component={Technologies} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
