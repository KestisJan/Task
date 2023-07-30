import './App.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import TopBody from './Components/TopBody';
import MiddleBody from './Components/MiddleBody';
import Bar from './Components/Bar';
import Doghnut from './Components/Doghnut';

function App() {
  return (
    <div className='container'>
        <div id="item-0"><Navigation/></div>
        <div id="item-1"><Header/></div>
        <div id="item-2"><TopBody/></div>
        <div id="item-3"><MiddleBody/></div>
        <div id="item-4"><Bar/></div>
        <div id="item-5"><Doghnut/></div>
    </div>
  );
}

export default App;
