import React from 'react'
import Grid from '@material-ui/core/Grid'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import FormControl from '@material-ui/core/FormControl'
import { InputAdornment, TextField } from '@material-ui/core'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import staticData from '../../shared/variables'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

class InvoiceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            typeAmount: 'net',
            rate: 23,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('state', this.state)
        this.props.parentCallback(this.state)
    }

    render() {
        return (
            <Grid xs={12} item={true}>
                <Grid
                    xs={12}
                    item={true}
                    className="header-section background5"
                >
                    <DescriptionOutlinedIcon
                        htmlColor="#ffffff"
                        name="Wypełnij formularz"
                    />
                    <h2>Wypełnij formularz</h2>
                </Grid>
                <Grid xs={12} item={true} className="container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <FormControl
                            component="fieldset"
                            margin="normal"
                            fullWidth={true}
                        >
                            <TextField
                                inputProps={{
                                    step: '0.01',
                                    min: 0,
                                    autoFocus: true,
                                }}
                                id="amount"
                                name="amount"
                                value={this.state.amount}
                                onChange={this.handleChange}
                                required={true}
                                label="Kwota"
                                type="number"
                                fullWidth={true}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            zł
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                            />
                        </FormControl>
                        <Grid container margin="normal" spacing={2}>
                            <Grid sm={6} xs={12} item={true}>
                                <FormControl
                                    component="fieldset"
                                    margin="normal"
                                    fullWidth={true}
                                    variant="outlined"
                                >
                                    <InputLabel id="tax-rate-label">
                                        Stawka podatku VAT
                                    </InputLabel>
                                    <Select
                                        labelId="tax-rate-label"
                                        id="tax-rate-label"
                                        name="rate"
                                        value={this.state.rate}
                                        onChange={this.handleChange}
                                        label="Stawka podatku VAT"
                                    >
                                        {staticData.vatRates.map((rate) => (
                                            <MenuItem value={rate.value}>
                                                {rate.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid sm={6} xs={12} item={true}>
                                <FormControl
                                    component="fieldset"
                                    margin="normal"
                                    fullWidth={true}
                                >
                                    <FormLabel component="legend">
                                        Wynagrodzenie
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="position"
                                        name="position"
                                        defaultValue="top"
                                    >
                                        <FormControlLabel
                                            control={<Radio color="primary" />}
                                            label="netto"
                                            value="net"
                                            name="typeAmount"
                                            checked={
                                                this.state.typeAmount === 'net'
                                            }
                                            onChange={this.handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Radio color="primary" />}
                                            label="brutto"
                                            value="gross"
                                            name="typeAmount"
                                            checked={
                                                this.state.typeAmount ===
                                                'gross'
                                            }
                                            onChange={this.handleChange}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid xs={12} item={true} margin="normal">
                            <FormControl
                                component="fieldset"
                                margin="normal"
                                fullWidth={true}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth={true}
                                    type="submit"
                                >
                                    Oblicz
                                </Button>
                            </FormControl>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        )
    }
}
export default InvoiceForm
