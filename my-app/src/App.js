import './App.css';
import { Outlet } from "react-router-dom"
import Navbar from './containers/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        Home Page
        <Outlet />
      </div>
    </div>
  );
}

export default App;
