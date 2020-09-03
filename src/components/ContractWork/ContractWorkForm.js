import React from "react";

class ContractWorkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            typeAmount: 'net',
            expenses: '0.2',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.parentCallback(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label className="label" htmlFor="amount">Wynagrodzenie</label>
                        <input id="amount" name="amount" type="number" value={this.state.amount} onChange={this.handleChange} step="0.01" min="0"
                               required="required"
                               autoFocus="autofocus"/>

                        <div className="label"></div>
                        <input id="net" value="net" name="typeAmount" type="radio" checked={this.state.typeAmount === "net"} onChange={this.handleChange}/><label
                        htmlFor="net">netto</label>
                        <input id="gross" value="gross" name="typeAmount" type="radio" checked={this.state.typeAmount === "gross"} onChange={this.handleChange}/><label
                        htmlFor="gross">brutto</label>
                    </div>
                    <div className="input">
                        <label className="label" htmlFor="">Koszty przychodu</label>
                        <input id="p20" value="0.2" name="expenses" type="radio" checked={this.state.expenses === "0.2"} onChange={this.handleChange}/><label
                        htmlFor="p20">20%</label>
                        <input id="p50" value="0.5" name="expenses" type="radio" checked={this.state.expenses === "0.5"} onChange={this.handleChange}/><label htmlFor="p50">50%</label>
                    </div>
                    <input className="submit4" type="submit" value="Oblicz"/>
                </form>
            </div>
        );
    }
}

export default ContractWorkForm