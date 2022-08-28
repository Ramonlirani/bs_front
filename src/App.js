import { BrowserRouter, Routers, Routes } from 'react-router-dom';
import './App.css';
import PageLogin from './components/PageLogin';
import background from '../src/assets/image/imagem de fundo.jpg';


//components

<link rel="stylesheet" href="https://use.typekit.net/lgl6ykg.css"></link>

function App() {
  return (
    <div className="App">     
        <img src={background} className="background-image" alt="background" />
        <PageLogin path="/"/>
        
    </div>
  );
}

export default App;
