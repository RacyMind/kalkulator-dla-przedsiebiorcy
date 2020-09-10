import React from "react";
import ContractWorkForm from "./ContractWorkForm";
import ContractWorkSummary from "./ContractWorkSummary";
import Advert from "../Advert/Advert";
import ContractWorkLogic from "./ContractWorkLogic";
import Snackbar from '@material-ui/core/Snackbar';
import {formatAsCurrency} from '../../shared/utils/helpers'

class ContractWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: new ContractWorkLogic(),
            snackbar1: false,
            snackbar2: false,
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
        if(model.gross<=200)
            this.setState({snackbar1:true});
        if(model.rateExpenses==0.5 && model.expenses >= model.maxExpenses)
            this.setState({snackbar2:true});


        this.setState({model:model});
    }
    handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({snackbar1:false, snackbar2:false});
    };
    render() {
        return(
        <div>
            <Snackbar
                key="gross200"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                autoHideDuration={6000}
                open={this.state.snackbar1}
                onClose={this.handleSnackBarClose}
                message="Dla wynagrodzenia brutto do 200 zł płaci się podatek zryczałtowany."
            />
            <Snackbar
                key="koszty"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                autoHideDuration={6000}
                open={this.state.snackbar2}
                onClose={this.handleSnackBarClose}
                message={'Przy 50% uzyskania kosztów obowiązuje limit kosztów w kwocie ' + formatAsCurrency(this.state.model.maxExpenses)}
            />
            <ContractWorkForm parentCallback={this.savedForm} />
            <Advert />
            <ContractWorkSummary model={this.state.model} />
        </div>
        );
    }
}
export default ContractWork