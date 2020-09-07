import React from "react";
import {formatAsCurrency} from '../../shared/utils/helpers'

const ContractWorkSummary = ({model}) => {
    return(
        <div>
            <div className="header-section background4">
                <img src={process.env.PUBLIC_URL + '/images/ico2.png'} alt="Podsumowanie"/>
                <h2>Podsumowanie</h2>
            </div>
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
        </div>
    )
}
export default ContractWorkSummary