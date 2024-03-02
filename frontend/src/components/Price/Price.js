import React from "react";

// The 'Intl.NumberFormat' constructor formats the 'price' according to the specified 'locale' and 'currency'. 
export default function Price({price, locale, currency}) {
    const formatPrice = () =>
        new Intl.NumberFormat(locale, {
            styel: 'currency',
            currency,
        }).format(price);

  return <span>{formatPrice()}</span>
}

Price.defaultProps = {
    locale: 'en-AU',
    currency: 'AUD'
}
