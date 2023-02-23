import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router,
Routes,
Route} from 'react-router-dom'
// import './App.css';
import Menu1 from './Component/NavBar/Menu1';

// Routing for Menu1
import Support from './Component/NavBar/Support';
import Info_Centre from './Component/NavBar/Info_Centre';
import Investor_Relations from './Component/NavBar/Investor_Relations';

import Menu2 from './Component/NavBar/Menu2';
import Menu3 from './components/Menubar/Menu3';
import Home from './Pages/Home';
import Motor from './Pages/Motor';
import Health from './Pages/Health';
import Travel from './Pages/Travel';
import Business from './Pages/Business';
import Other from './Pages/Other';
import Renewals from './Pages/Renewals';
import Claims from './Pages/Claims';
import Login from './Pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <App />
    <Router>
      <Routes>
        <Route Path="/Support" component={Support}/>
        <Route Path="/Info_Centre" component={Info_Centre}/>
        <Route Path="/Investor_Relations" component={Investor_Relations}/>
      </Routes>
      {/* <Menu3/> */}
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Motor' component={Motor} />
        <Route path='/Health' component={Health} />
        <Route path='/Travel' component={Travel} />
        <Route path='/Business' component={Business} />
        <Route path='/Other' component={Other} />
        <Route path='/Renewals' component={Renewals} />
        <Route path='/Claims' component={Claims} />
        <Route path='/Login' component={Login} />
      </Routes>
    </Router>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

