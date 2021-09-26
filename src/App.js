import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
