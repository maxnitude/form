import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Step1Form from './components/Step1Form';
import Step2Form from './components/Step2Form';
import Step3Form from './components/Step3Form';
import Header from './components/Header';
import EndPage from './components/EndPage';

function App() {
  return (
    <>
      <Header />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Step1Form} />
          <Route exact path='/step2' component={Step2Form} />
          <Route exact path='/step3' component={Step3Form} />
          <Route exact path='/endpage' component={EndPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
