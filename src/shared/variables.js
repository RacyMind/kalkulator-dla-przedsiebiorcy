const firstTaxRate = 0.17
const amountTaxThreshold = 85528
const vatRates = [
    { name: '0%', value: 0 },
    { name: '5%', value: 5 },
    { name: '8%', value: 8 },
    { name: '23%', value: 23 },
]
export default {
    firstTaxRate,
    amountTaxThreshold,
    vatRates,
}
