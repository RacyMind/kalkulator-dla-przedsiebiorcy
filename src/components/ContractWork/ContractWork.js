import React from "react";
import ContractWorkForm from "./ContractWorkForm";
import ContractWorkSummary from "./ContractWorkSummary";

class ContractWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                amount: 0,
                typeAmount: 'net',
                expenses: '0.2',
            },
        };
    }
    savedForm = (data) => {
        this.setState({formData:data});
        console.log(this.state.formData);
    }
    render() {
        return(
        <div>
            <div className="header-section background4">
                <img src={process.env.PUBLIC_URL + '/images/ico1.png'} alt="Wypełnij formularz"/>
                <h2>Wypełnij formularz</h2>
            </div>
            <ContractWorkForm parentCallback={this.savedForm} />
            <div className="header-section background4">
                <img src={process.env.PUBLIC_URL + '/images/ico2.png'} alt="Podsumowanie"/>
                <h2>Podsumowanie</h2>
            </div>
            <ContractWorkSummary amount={this.state.formData.amount} typeAmount={this.state.formData.typeAmount} expenses={this.state.formData.expenses} />

        </div>
        );
    }
}
export default ContractWork