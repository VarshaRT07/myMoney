
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';


function App() {

  const {authIsReady,user}=useAuthContext();

  return (
    <div className="App">

    {authIsReady && (<BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path="/">
        {user && <Home/>}
        {!user && <Redirect to="/"/>}
      </Route>
      <Route path="/login">
      {user && <Redirect to="/"/>}
        {!user && <Login/>}
      </Route>
      <Route  path="/signup">
        {!user && <Signup/>}
        {user && <Redirect to="/"/>}
      </Route>
      </Switch>
      </BrowserRouter>)}
    </div>
  );
}

export default App
