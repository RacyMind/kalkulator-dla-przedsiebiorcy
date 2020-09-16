import React from 'react'
import InvoiceLogic from './InvoiceLogic'
import Theme from '../../containers/Theme'
import InvoiceForm from './InvoiceForm'
import Advert from '../Advert/Advert'
import InvoiceSummary from './InvoiceSummary'
import InvoiceChart from './InvoiceChart'

class Invoice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            model: new InvoiceLogic(),
        }
    }
    savedForm = (data) => {
        let model = this.state.model
        let amount = parseFloat(data.amount)
        model.rateTax = parseFloat(data.rate) / 100
        if (data.typeAmount === 'net') {
            model.net = amount
            model.calculateTaxAmount()
            model.calculateGross()
        }
        if (data.typeAmount === 'gross') {
            model.gross = amount
            model.calculateNet()
            model.calculateTaxAmount()
        }
        this.setState({ model: model })
    }
    render() {
        return (
            <Theme customTheme="custom5">
                <InvoiceForm parentCallback={this.savedForm} />
                <Advert />
                <InvoiceSummary model={this.state.model} />
                <InvoiceChart model={this.state.model} />
            </Theme>
        )
    }
}
export default Invoice
