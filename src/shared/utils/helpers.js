export function formatAsCurrency(value) {
    const currencyFormatRegex = /\B(?=(\d{3})+(?!\d))/g
    const separator = '.'
    const [wholePart, decimalPart] = String(value.toFixed(2)).split(separator)

    const wholePartFormattedAsCurrency = wholePart.replace(
        currencyFormatRegex,
        ' ',
    )

    const formattedValue =
        typeof decimalPart !== 'undefined'
            ? [wholePartFormattedAsCurrency, decimalPart].join(separator)
            : wholePartFormattedAsCurrency

    return `${formattedValue} zł`
}
export function diffDays(start, end) {
    let dt1 = new Date(start)
    let dt2 = new Date(end)
    return Math.floor(
        (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
            Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
            (1000 * 60 * 60 * 24),
    )
}
