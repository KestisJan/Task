import './App.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import TopBody from './Components/TopBody';

function App() {
  return (
    <div className='container'>
        <div id="item-0"><Navigation/></div>
        <div id="item-1"><Header/></div>
        <div id="item-2"><TopBody/></div>
        <div id="item-3">&nbsp;</div>
        <div id="item-4">&nbsp;</div>
        <div id="item-5">&nbsp;</div>
    </div>
  );
}

export default App;
