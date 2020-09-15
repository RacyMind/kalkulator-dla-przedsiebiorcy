import React from 'react'
import { formatAsCurrency } from '../../shared/utils/helpers'
import Grid from '@material-ui/core/Grid'
import CreditCardIcon from '@material-ui/icons/CreditCard'
const InterestSummary = ({ model }) => {
    return (
        <Grid xs={12} item={true}>
            <div className="header-section background6">
                <CreditCardIcon htmlColor="#ffffff" />
                <h2>Podsumowanie</h2>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td className="td_name">Kwota</td>
                        <td className="td_value output_net">
                            {formatAsCurrency(model.net)}
                        </td>
                    </tr>
                    <tr>
                        <td className="td_name">Odsetki</td>
                        <td className="td_value output_interest">
                            {formatAsCurrency(model.interest)}
                        </td>
                    </tr>
                    <tr>
                        <td className="td_name">Liczba dni</td>
                        <td className="td_value output_days">{model.days}</td>
                    </tr>
                    <tr className="total">
                        <td className="td_name">Suma kwoty i odsetek</td>
                        <td className="td_value output_gross">
                            {formatAsCurrency(model.gross)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </Grid>
    )
}
export default InterestSummary
