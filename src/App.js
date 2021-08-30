import SelectAssessment from './Pages/SelectAssessment';
import LogIn from './Pages/LogIn';
import FirstAssessmenet from './Pages/FirstAssessment';
import SecondAssessment from './Pages/SecondAssessment';
import ThirdAssessment from './Pages/ThirdAssessment';
import Example from './Pages/Example';
import Timer from './Componants/Timer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Result from './Pages/Result';
import { pagePaths } from './utils/constant';
import Pratics from './Pages/Pratics'

export default function App() {
    return (

        <Router>
            <Switch>
                <Redirect exact path={pagePaths.root} to={pagePaths.login} />
                <Route path={pagePaths.login} component={LogIn} />
                <Route path={pagePaths.selectassessment} component={SelectAssessment} />
                <Route path={pagePaths.firstassessment} component={FirstAssessmenet} />
                <Route path={pagePaths.secondassessment} component={SecondAssessment} />
                <Route path={pagePaths.thirdassessment} component={ThirdAssessment} />
                <Route path={pagePaths.example} component={Example} />
                <Route path={pagePaths.result} component={Result} />
                <Route path={pagePaths.pratics} component={Pratics} />
                <Route path={pagePaths.timer} component={Timer} />



            </Switch>
        </Router>

    )
}

