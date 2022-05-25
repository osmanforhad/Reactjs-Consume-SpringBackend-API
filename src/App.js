import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeListComponent from './components/EmployeeListComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import EmployeeDetailsComponent from './components/EmployeeDetailsComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={EmployeeListComponent}></Route>
            <Route path="/add_employee" component={CreateEmployeeComponent}></Route>
            <Route path="/update_employee/:id" component={UpdateEmployeeComponent}></Route>
            <Route path="/view_employee/:id" component={EmployeeDetailsComponent}></Route>
            <Route path="/employees" component={EmployeeListComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
