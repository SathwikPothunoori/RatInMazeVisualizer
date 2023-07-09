import logo from './logo.svg';
import './App.css';


import Visualizer from './components/visualizer';

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col space-y-5">
      <h1 className='heading font-bold'>Rat In Maze Visualizer</h1>
      <Visualizer/>
      <h3 className='footer font-bold'>Made with love💚 <a href="https://github.com/SathwikPothunoori/RatinmazeVisualizer.git">Github</a></h3>
    </div>
  );
} 

export default App;
