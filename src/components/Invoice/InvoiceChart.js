import React from 'react'
import Grid from '@material-ui/core/Grid'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import DonutSmallRoundedIcon from '@material-ui/icons/DonutSmallRounded'
import Chart from 'react-google-charts'

const InvoiceChart = ({ model }) => {
    if (model.net > 0) {
        return (
            <Grid xs={12} item={true}>
                <div className="header-section background5">
                    <DonutSmallRoundedIcon htmlColor="#ffffff" />
                    <h2>Wykres</h2>
                </div>
                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={
                        <Grid xs={12} item={true} className="container">
                            Wczytywanie...
                        </Grid>
                    }
                    data={[
                        ['Kwota', 'zł'],
                        ['Kwota (w zł)', model.net],
                        ['VAT (w zł)', model.taxAmount],
                    ]}
                    options={{
                        title: '',
                        is3D: true,
                        legend: 'none',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </Grid>
        )
    } else {
        return (
            <Grid xs={12} item={true}>
                <div className="header-section background5">
                    <DonutSmallRoundedIcon htmlColor="#ffffff" />
                    <h2>Wykres</h2>
                </div>
                <Grid xs={12} item={true} className="container">
                    Brak danych
                </Grid>
            </Grid>
        )
    }
}

export default InvoiceChart
