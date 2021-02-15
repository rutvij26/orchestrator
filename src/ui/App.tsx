import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Sidebar from "./../navigation/sidebar";
import Attributes from "./components/attributes";
import ThreeD from "./components/3d";
import RulesEngine from "./components/rulesEngine";
import "./App.css";

export interface AppProps {}

const App: FC<AppProps> = (props) => {
    return (
        <ThemeProvider theme={{}}>
            <Sidebar />
            <Switch>
                <Route path="/attributes" component={Attributes} />
                <Route path="/3d" component={ThreeD} />
                <Route path="/rulesEngine" component={RulesEngine} />
                <Redirect from="/" to="/attributes" />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
