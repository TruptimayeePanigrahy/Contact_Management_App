import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import ToastComponent from './ToastComponent';


import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      
      <ToastComponent />
      <Router>
        <Routes>
          
          <Route path="/" element={<Home/>} />
         
        </Routes>
      </Router>
      
    </div>
  );
}


export default App;
