export const calculatePrice = (product, quantity) => {
  const qty = parseInt(quantity);

  if (!product || !qty || qty <= 0) return 0;

  // Base prices (example rates)
  const priceRates = {
    "Visiting Cards": 3, // per card
    "Bill Book / Receipt Book": 60, // per book
    "Challan Book": 55,
    "Voucher Printing": 2,
    "Sticker Printing": 25, // per sheet
    "Pamphlet / Flyer": 1.5, // per piece
    "Banner Printing": 25, // per sq.ft approx
    "Vinyl Printing": 35,
    "Letterhead Printing": 4,
    "Envelope Printing": 6,
    "Binding Works": 80,
  };

  const rate = priceRates[product] || 0;

  let total = rate * qty;

  // Bulk Discount Logic
  if (qty >= 1000) total = total * 0.9; // 10% off
  else if (qty >= 500) total = total * 0.95; // 5% off

  return Math.round(total);
};
