import  { Home, Landing, Detail, Form } from "./views"
import { Route, useLocation } from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar/NavBar"
axios.defaults.baseURL = "http://localhost:3001"



function App() {
  const location = useLocation();
          //rutas
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      
      <Route path="/home" component={Home} />

      <Route path="/create" component={Form} />

      <Route path="/detail/:id" component={Detail} />
      
      
    </div>
  );
}

export default App;
