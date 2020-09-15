import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import ContractWork from '../components/ContractWork/ContractWork'
import Interest from '../components/Interest/Interest'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Theme from './Theme'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

function App() {
    return (
        <Theme>
            <div className="App">
                <Container
                    maxWidth="sm"
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                    <Grid xs={12} item={true}>
                        <Router>
                            <Switch>
                                <Route path="/umowa-o-dzielo">
                                    <Header name="Umowa o dzieło" />
                                    <ContractWork />
                                </Route>
                                <Route path="/kalkulator-odsetek">
                                    <Header name="Kalkulator odsetek" />
                                    <Interest />
                                </Route>
                                <Route path="/">
                                    <Header
                                        name="Kalkulator dla przedsiębiorcy"
                                        backUrl="/"
                                        isHome={true}
                                    />
                                    <Main />
                                </Route>
                            </Switch>
                        </Router>
                    </Grid>
                </Container>
                <Footer />
            </div>
        </Theme>
    )
}

export default App
