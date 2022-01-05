import './App.css';
import Form_Page from './pages/Form_Page';
import Home_Page from './pages/Home_Page';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={< Home_Page />}></Route>
        <Route path='/home' element={< Home_Page />}></Route>
        <Route path='/contact_us' element={< Form_Page/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
