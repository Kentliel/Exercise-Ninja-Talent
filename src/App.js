import './App.css';
import Info from './component/Info';
import ContextUsers from './context/ContextUsers';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ContextUsers>
        <Routes>
          <Route path='/' element={<Info />}/>
        </Routes>
      </ContextUsers>

    </div>
  );
}

export default App;
