import './App.css';
import naturalNumber from './tacks/tacks1';
import { damage } from './tacks/games/tacks2';
import {FIRE, WATER, GRASS, ELECTRIC} from './tacks/games/effectiveness';







function App() {
  return (
    <div className="App">
      <track2>
              {
                `The result of solving problem No. 2: ${damage(FIRE, GRASS, 10, 10)}`
              }
      </track2>
      
      
    </div>
  );
}

export default App;
