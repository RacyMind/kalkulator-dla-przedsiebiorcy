import React from 'react'

class InterestLogic {
    /**
     * Kwota netto
     * @type {number}
     */
    net = 0
    /**
     * Kwota brutto
     * @type {number}
     */
    gross = 0
    /**
     * Kwota odsetek
     * @type {number}
     */
    interest = 0
    /**
     * Stawka procentowa odsetek
     * @type {number}
     */
    rateInterest = 0
    /**
     * Ilosc dni spoznienia
     * @type {number}
     */
    days = 0

    /**
     * Oblicza kwote odsetek
     */
    calculateInterest() {
        this.interest = (this.net * this.rateInterest * this.days) / 365
        this.interest = +this.interest.toFixed(2)
    }

    /**
     * Oblicza kwote brutto
     */
    calculateGross() {
        this.gross = this.net + this.interest
    }
    diffDays(start, end) {
        let dt1 = new Date(start)
        let dt2 = new Date(end)
        this.days = Math.floor(
            (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
                Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
                (1000 * 60 * 60 * 24),
        )
    }
}

export default InterestLogic
