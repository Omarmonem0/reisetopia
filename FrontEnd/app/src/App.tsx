import { Outlet } from 'react-router-dom';
import './App.css';
import SearchPage from './Pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="App"> 
        <Outlet />
    </div>
  );
}

export default App;
