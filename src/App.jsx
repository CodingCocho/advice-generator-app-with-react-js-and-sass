import './App.css';
import { AdviceGenerator } from './components/AdviceGenerator';

function App() {

  document.body.classList.add('body-styling')

  return (
    <div className="App">
      <AdviceGenerator />
    </div>
  );
}

export default App;
