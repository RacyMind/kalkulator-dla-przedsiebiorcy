import React from 'react'
import InterestForm from './InterestForm'
import InterestLogic from './InterestLogic'
import InterestSummary from './InterestSummary'
import InterestChart from './InterestChart'
import Advert from '../Advert/Advert'
import Theme from '../../containers/Theme'
class Interest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            model: new InterestLogic(),
        }
    }
    savedForm = (data) => {
        let model = this.state.model
        model.net = parseFloat(data.amount)
        model.rateInterest = parseFloat(data.percent / 100)
        model.diffDays(data.start, data.end)
        model.calculateInterest()
        model.calculateGross()

        this.setState({ model: model })
    }
    render() {
        return (
            <Theme customTheme="custom6">
                <InterestForm parentCallback={this.savedForm} />
                <Advert />
                <InterestSummary model={this.state.model} />
                <InterestChart model={this.state.model} />
            </Theme>
        )
    }
}

export default Interest
