import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Login} />
      <Footer />
    </Router>
  );
}

export default App;
