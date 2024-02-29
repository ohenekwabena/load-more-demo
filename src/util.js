export function formatPrice(price) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formattedPrice.format(price / 100);
}
