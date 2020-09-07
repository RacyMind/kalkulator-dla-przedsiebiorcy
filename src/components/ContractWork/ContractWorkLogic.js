import React from "react";
import staticData from '../../shared/variables';

class ContractWorkLogic {
    /**
     * Kwota netto
     * @type {number}
     */
    net = 0;
    /**
     * Kwota brutto
     * @type {number}
     */
    gross = 0;
    /**
     * Kwota podatku
     * @type {number}
     */
    taxAmount = 0;
    /**
     * Podstawa do obliczenia podatku
     * @type {number}
     */
    basisForTax = 0;
    /**
     * Koszty uzyskania przychodu
     * @type {number}
     */
    expenses = 0;
    /**
     * Stawka kosztow uzyskania przychodu
     * @type {number}
     */
    rateExpenses;
    /**
     * Maksymalne koszty przy 50% kosztow przychodu
     * @type {number}
     */
    maxExpenses;
    /**
     * Stawka podatku
     * @type {number}
     */
    rateTax = staticData.firstTaxRate;

    constructor() {
        this.maxExpenses=staticData.amountTaxThreshold / 2;
    }

    /**
     * Oblicza kwotę podatku
     */
    calculateTaxAmount() {
        this.taxAmount = Math.round(this.basisForTax * this.rateTax);
    }

    /**
     * Oblicza koszty uzyskania przychodu
     */
    calculateExpenses() {
        let expenses;
        expenses = this.gross * this.rateExpenses;
        expenses = +(expenses.toFixed(2));
        if (this.rateExpenses == 0.5 && expenses > this.maxExpenses) {
            expenses = this.maxExpenses;
        }
        this.expenses = expenses;
    }

    /**
     * Oblicza podstawę opodatkowania
     */
    calculateBasisForTax() {
        this.basisForTax = this.gross - this.expenses;
    }

    /**
     * Oblicza kwotę netto
     */
    calculateNet() {
        this.net = this.gross - this.taxAmount;
    }

    /**
     * Oblicza kwotę brutto
     */
    calculateGross() {
        this.gross = this.net / (1 - this.rateTax * (1 - this.rateExpenses));
        this.gross = +(this.gross.toFixed(2));
    }

    /**
     * Obliczenia, gdy podano netto
     */
    calculateWhenNetGet() {
        this.calculateGross();
        if(this.gross<=200)
            this.rateExpenses=0;
        this.calculateExpenses()
        this.calculateBasisForTax();
        this.calculateTaxAmount();
        this.gross=this.net + this.taxAmount;
    }

    /**
     * Obliczenia, gdy podano brutto
     */
    calculateWhenGrossGet() {
        if(this.gross<=200)
            this.rateExpenses=0;
        this.calculateExpenses()
        this.calculateBasisForTax();
        this.calculateTaxAmount();
        this.calculateNet();
    }
}

export default ContractWorkLogic