import React from "react";
import Menu from "./common/Menu.jsx"
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home.jsx";
import Settings from "./containers/Settings.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css"
import UsersContainer from "./containers/UsersContainer.js";

function App() {
    return (
        <>
            <Provider store={store}>
                <Menu />
                <Switch>
                    <Route exact path='/' component={() => <><Home /></>} />
                    <Route exact path='/settings' component={() => <><Settings /></>} />
                    <Route exact path='/user' component={() => <><UsersContainer /></>} />
                </Switch>
            </Provider>
        </>
    );
}

export default App;