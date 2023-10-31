import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/sideBar';
import MainContent from './Components/MainContent';
function App() {
  return (
    <div className="container">
      <div className="section teal-section">
      <Sidebar/>
      
      </div>
      <div className="section white-section">
      <MainContent/>
      </div>
    </div>
  );
}

export default App;
