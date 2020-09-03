import React from "react";
import {formatAsCurrency} from '../../shared/utils/helpers'
import ContractWorkLogic from "../../logic/ContractWorkLogic";

const ContractWorkSummary = ({amount, typeAmount, expenses}) => {
    amount = parseFloat(amount);
    expenses = parseFloat(expenses);
    let model = new ContractWorkLogic();
    model.rateExpenses=expenses;
    if(typeAmount==='net') {
        model.net=amount;
        model.calculateWhenNetGet();
    }
    if(typeAmount==='gross') {
        model.gross=amount;
        model.calculateWhenGrossGet();
    }
    return(
    <table>
        <tbody>
        <tr>
            <td className="td_name">Wynagrodzenie netto</td>
            <td className="td_value output_net">{formatAsCurrency(model.net)}</td>
        </tr>
        <tr>
            <td className="td_name">Koszty przychodu</td>
            <td className="td_value output_expenses">{formatAsCurrency(model.expenses)}</td>
        </tr>
        <tr>
            <td className="td_name">Podstawa opodatkowania</td>
            <td className="td_value output_basisForTax">{formatAsCurrency(Math.round(model.basisForTax))}</td>
        </tr>
        <tr>
            <td className="td_name">Zaliczka na podatek</td>
            <td className="td_value output_taxAmount">{formatAsCurrency(model.taxAmount)}</td>
        </tr>
        <tr className="total">
            <td className="td_name">Wynagrodzenie brutto</td>
            <td className="td_value output_gross">{formatAsCurrency(model.gross)}</td>
        </tr>
        </tbody>
    </table>
    )
}
export default ContractWorkSummary