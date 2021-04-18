import React from 'react'
import { Switch , Route} from 'react-router-dom'
import Home from './Home/Home'
import Menu from './Menu'
import NotFound from './NotFound/NotFound'

const MainPages:React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/menu" component={Menu}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default MainPages