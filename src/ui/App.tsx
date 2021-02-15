import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./../navigation/sidebar";
import Attributes from "./components/attributes";
import ThreeD from "./components/3d";
import RulesEngine from "./components/rulesEngine";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";

export interface AppProps {}

export const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.background};
    height: 100vh;
`;

export const AppWrapper = styled.div`
    display: flex;
`;

const App: FC<AppProps> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppContainer>
                    <Sidebar />
                    <AppWrapper>
                        <Switch>
                            <Route path="/attributes" component={Attributes} />
                            <Route path="/3d" component={ThreeD} />
                            <Route
                                path="/rulesEngine"
                                component={RulesEngine}
                            />
                            <Redirect from="/" to="/attributes" />
                        </Switch>
                    </AppWrapper>
                </AppContainer>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
