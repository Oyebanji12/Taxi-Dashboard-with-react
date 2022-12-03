import Dashboard from "./component/Dashboard";
import Sidebar from "./component/Sidebar";



function App() {
  return (
    <div>
      
      <div className="app">
      <Sidebar />
      <div className="app-container">
      <Dashboard />
      </div>

      </div>
      
      
    </div>
  );
}

export default App;
