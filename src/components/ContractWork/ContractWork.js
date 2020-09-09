import React from "react";
import ContractWorkForm from "./ContractWorkForm";
import ContractWorkSummary from "./ContractWorkSummary";
import Advert from "../Advert/Advert";
import ContractWorkLogic from "./ContractWorkLogic";

class ContractWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: new ContractWorkLogic(),
        };
    }
    savedForm = (data) => {
        let model = this.state.model;
        let amount = parseFloat(data.amount);
        let expenses = parseFloat(data.expenses);
        model.rateExpenses=expenses;
        if(data.typeAmount==='net') {
            model.net=amount;
            model.calculateWhenNetGet();
        }
        if(data.typeAmount==='gross') {
            model.gross=amount;
            model.calculateWhenGrossGet();
        }
        this.setState({model:model});
    }
    render() {
        return(
        <div>
            <ContractWorkForm parentCallback={this.savedForm} />
            <Advert />
            <ContractWorkSummary model={this.state.model} />
        </div>
        );
    }
}
export default ContractWork