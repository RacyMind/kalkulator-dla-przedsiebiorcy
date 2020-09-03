import React from 'react';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ContractWork from "../components/ContractWork/ContractWork";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <main className="fullSize alignCenter">
                <div className="wrapper">
                    <Router>
                        <Switch>
                            <Route path="/umowa-o-dzielo">
                                <Header name="Umowa o dzieło" />
                                <ContractWork/>
                            </Route>
                            <Route path="/">
                                <Header name="Kalkulator dla przedsiębiorcy" backUrl="/" isHome={true} />
                                <Main/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
