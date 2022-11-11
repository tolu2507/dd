const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "ngn",
  style: "currency",
});

export function currencyFormatter(number: number) {
    return CURRENCY_FORMATTER.format(number)
}
