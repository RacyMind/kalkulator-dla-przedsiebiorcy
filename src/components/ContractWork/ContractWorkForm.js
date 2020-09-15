import React from 'react'
import Grid from '@material-ui/core/Grid'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import { TextField, InputAdornment } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'

class ContractWorkForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            typeAmount: 'net',
            expenses: '0.2',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.parentCallback(this.state)
    }

    render() {
        return (
            <Grid xs={12} item={true}>
                <Grid
                    xs={12}
                    item={true}
                    className="header-section background4"
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
                        <Grid container margin="normal">
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
                            <Grid sm={6} xs={12} item={true}>
                                <FormControl
                                    component="fieldset"
                                    margin="normal"
                                    fullWidth={true}
                                >
                                    <FormLabel component="legend">
                                        Koszty uzyskania przychodu
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="position"
                                        name="position"
                                        defaultValue="top"
                                    >
                                        <FormControlLabel
                                            control={<Radio color="primary" />}
                                            label="20%"
                                            value="0.2"
                                            name="expenses"
                                            checked={
                                                this.state.expenses === '0.2'
                                            }
                                            onChange={this.handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Radio color="primary" />}
                                            label="50%"
                                            value="0.5"
                                            name="expenses"
                                            checked={
                                                this.state.expenses === '0.5'
                                            }
                                            onChange={this.handleChange}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth={true}
                            type="submit"
                        >
                            Oblicz
                        </Button>
                    </form>
                </Grid>
            </Grid>
        )
    }
}

export default ContractWorkForm
