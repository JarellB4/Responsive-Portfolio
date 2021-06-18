import React from 'react';
import Header from "./components/Header/Header";
import Main from "./pages/Main"
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path = "/Contact" component= {Contact} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
