import React from 'react';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ContractWork from "../components/ContractWork/ContractWork";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="fullSize alignCenter">
                <Switch>
                    <Route path="/umowa-o-dzielo">
                        <ContractWork/>
                    </Route>
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
