import React from 'react'
import { formatAsCurrency } from '../../shared/utils/helpers'
import Grid from '@material-ui/core/Grid'
import CreditCardIcon from '@material-ui/icons/CreditCard'
const InvoiceSummary = ({ model }) => {
    return (
        <Grid xs={12} item={true}>
            <div className="header-section background5">
                <CreditCardIcon htmlColor="#ffffff" />
                <h2>Podsumowanie</h2>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td className="td_name">Wynagrodzenie netto</td>
                        <td className="td_value output_net">
                            {formatAsCurrency(model.net)}
                        </td>
                    </tr>
                    <tr>
                        <td className="td_name">Kwota podatku</td>
                        <td className="td_value output_taxAmount">
                            {formatAsCurrency(model.taxAmount)}
                        </td>
                    </tr>
                    <tr className="total">
                        <td className="td_name">Wynagrodzenie brutto</td>
                        <td className="td_value output_gross">
                            {formatAsCurrency(model.gross)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </Grid>
    )
}
export default InvoiceSummary
