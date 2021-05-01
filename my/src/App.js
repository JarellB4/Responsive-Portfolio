import React from 'react';
import Header from "./components/Header/Header";
import Main from "./pages/Main"
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
