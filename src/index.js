import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Switch,  Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Admin from './pages/Admin';
import Curiosity from './pages/Curiosity';
import Spirit from './pages/Spirit';
import {LoginContext} from './contexts/LoginContext';
import Opportunity from './pages/Opportunity';

// const TITLE = 'My Page Title';



var NoMatch = (props) => {
  var goApp = () => props.history.push("/");
  return <div>Route did not match
    <button onClick={goApp}>Go Home</button></div>;
};

// var DemonstruotiNavigacija = () => {
//   let location = useLocation();
//   let history = useHistory();
//   let goHome = () => history.push("/");
//   let params = useParams();
//   let match = useRouteMatch();
//   let { id } = useParams(); // arba match.params
//   return (
//     <div>
//       At route: {location.pathname} (ID: {id})
//       <button onClick={goHome}>Go Home</button>
//       <pre>
//         {JSON.stringify(history, null, 2)}<br />
//         {JSON.stringify(location, null, 2)}<br />
//         {JSON.stringify(match, null, 2)}<br />
//         {JSON.stringify(params, null, 2)}
//       </pre>
//     </div>
//   );
// };

var AppContainer = (props) => {
  // const [showusername, setShowusername] = useState(false);
  // const [username, setUsername] = useState("");
  // const [cart, setCart] = useState(0);
  
  const [productdetails, setProductdetails] = useState({
   
          name: 'Curiosity',
          landing_date: "2012-08-06",
          cameras: 7,
          imageUrl: "loading.img"
        
      });
  return (
  <div>
    <LoginContext.Provider value={{productdetails, setProductdetails}}>
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <h1>MARSAS</h1>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-white">Pradžios puslapis</a></li>
          <li><a href="/nuotraukos" class="nav-link px-2 text-white">Išsaugotos nuotraukos</a></li>
        </ul>
      </div>
    </div>
  </header>
  <div class="container">
    <main>
    {props.children}
    </main>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

  <div class="col-md-4 d-flex align-items-center">
      
      <span class="text-muted">Kristina Juraitytė</span>
    </div>
    <div class="col-md-4 d-flex align-items-center">
      
      <span class="text-muted">2022-02-15</span>
    </div>

    
  </footer>
</div>
    
    </LoginContext.Provider>
  </div>);
};

ReactDOM.render((
  <div>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppContainer>
        <Switch>
          <Route exact path='/' component={ App } />
          <Route path='/nuotraukos' component={ Admin } />
          <Route path='/curiosity' component={ Curiosity } />
          <Route path='/Opportunity' component={ Opportunity } />
          <Route path='/spirit' component={ Spirit } />
          {/* <Route path='/registracija' component={ Registracija } /> */}
          {/* <Route path='/:id'  component={ Product } /> */}
          <Route path="*" component={ NoMatch } />
          <Route component={ NoMatch } />
        </Switch>
      </AppContainer>
    </BrowserRouter>
    {/* <Helmet>
      <title>{TITLE}</title>
    </Helmet> */}
  </div>
), document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();