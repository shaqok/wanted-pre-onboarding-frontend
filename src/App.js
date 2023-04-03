import './App.css';
import MainRoutes from './MainRoutes';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='main-nav'>
        <NavLink to='/'>My Todo</NavLink>
      </nav>
      <MainRoutes />
    </div>
  );
}

export default App;
