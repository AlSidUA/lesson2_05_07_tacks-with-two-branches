import logo from './logo.svg';
import './App.css';
import naturalNumber from './tacks/tacks1';

function App() {
  return (
    <div className="App">
      {
        naturalNumber(10)
      }
    </div>
  );
}

export default App;
