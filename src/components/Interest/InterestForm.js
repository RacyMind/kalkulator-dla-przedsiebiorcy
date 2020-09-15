import React from 'react'
import Grid from '@material-ui/core/Grid'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import { TextField, InputAdornment } from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import plLocale from 'date-fns/locale/pl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import { diffDays } from '../../shared/utils/helpers'

class InterestForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            percent: 0,
            statutory: false,
            start: new Date(),
            end: new Date(),
            errors: {},
        }
    }

    handleChange = (event) => {
        if (event.target.type === 'checkbox') {
            this.setState({
                [event.target.name]: event.target.checked,
            })
            if (event.target.name == 'statutory' && event.target.checked)
                this.setState({ percent: 13 })
        } else {
            this.setState({
                [event.target.name]: event.target.value,
            })
            if (
                event.target.name == 'percent' &&
                parseFloat(event.target.value) != 13
            )
                this.setState({ statutory: false })
        }
    }
    handleStartDateChange = (date) => {
        this.setState({ start: date })
    }
    handleEndDateChange = (date) => {
        this.setState({ end: date })
    }
    handleValidation = () => {
        let isValid = true
        let errors = {}
        if (diffDays(this.state.start, this.state.end) <= 0) {
            errors['end'] = 'Data zapłaty nie może być przed terminem zapłaty'
            isValid = false
        }
        this.setState({ errors: errors })
        console.log('state', this.state)
        return isValid
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.handleValidation()) this.props.parentCallback(this.state)
    }

    render() {
        return (
            <Grid xs={12} item={true}>
                <Grid
                    xs={12}
                    item={true}
                    className="header-section background6"
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
                        <FormControl
                            component="fieldset"
                            margin="normal"
                            fullWidth={true}
                        >
                            <TextField
                                inputProps={{
                                    step: '0.1',
                                    min: 0,
                                    max: 100,
                                }}
                                id="percent"
                                name="percent"
                                value={this.state.percent}
                                onChange={this.handleChange}
                                required={true}
                                label="Odsetki"
                                type="number"
                                fullWidth={true}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            %
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.statutory}
                                        onChange={this.handleChange}
                                        name="statutory"
                                        color="primary"
                                        margin="none"
                                    />
                                }
                                label="Odsetki ustawowe"
                            />
                        </FormControl>
                        <MuiPickersUtilsProvider
                            utils={DateFnsUtils}
                            locale={plLocale}
                        >
                            <Grid container spacing={2}>
                                <Grid sm={6} xs={12} item={true}>
                                    <FormControl
                                        component="fieldset"
                                        fullWidth={true}
                                    >
                                        <KeyboardDatePicker
                                            id="start"
                                            name="start"
                                            value={this.state.start}
                                            onChange={
                                                this.handleStartDateChange
                                            }
                                            required={true}
                                            label="Termin zapłaty"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            format="dd.MM.yyyy"
                                            variant="outlined"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid sm={6} xs={12} item={true}>
                                    <FormControl
                                        component="fieldset"
                                        fullWidth={true}
                                    >
                                        <KeyboardDatePicker
                                            id="end"
                                            name="end"
                                            value={this.state.end}
                                            onChange={this.handleEndDateChange}
                                            required={true}
                                            label="Data zapłaty"
                                            fullWidth={true}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            format="dd.MM.yyyy"
                                            variant="outlined"
                                            error={this.state.errors.hasOwnProperty(
                                                'end',
                                            )}
                                            helperText={
                                                this.state.errors.hasOwnProperty(
                                                    'end',
                                                )
                                                    ? this.state.errors.end
                                                    : ''
                                            }
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </MuiPickersUtilsProvider>
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

export default InterestForm
