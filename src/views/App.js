import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './todos/ListTodo';
import Home from '../components/Home';
import ListUser from '../components/Users/ListUser';
import DetailUser from '../components/Users/DetailUser';
import FetchTotal from '../components/Fetchs/FetchTotal';

//react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Navigation
import Nav from './Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav /> <br></br>
          <img src={logo} className="App-logo" alt="logo" />

          {/* Switch check from top to down */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />

            </Route>
            <Route path="/fetchtotal">
              <FetchTotal />
            </Route>
          </Switch>

        </header>

        {/* react-toastify */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />

      </div>
    </Router>
  );
}

export default App;
