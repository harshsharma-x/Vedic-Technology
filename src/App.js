import logo from './logo.svg';
import './App.css';
import Header from './my_components/Header';
import {Routes,Route} from 'react-router-dom';
import Pricing from './pages/Pricing';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>
    </div>
  );
}

export default App;
