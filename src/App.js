import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './router/router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
