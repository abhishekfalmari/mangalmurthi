import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './components/auth/SignUp';
import RootComponent from './RootComponent'
import HeaderComponent from './components/header'
import FooterComponent from './components/footer'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <Switch>
                <Route path="/" exact>
                    <RootComponent />
                </Route>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
            </Switch>
            <FooterComponent />
        </BrowserRouter>

    )
}

export default AppRouter;