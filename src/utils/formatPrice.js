function formatPrice(price) {
    if(price == 0) {
        return 'Free';
    }
    const formattedPrice = (price-0.01).toLocaleString('en-US', { style: 'currency', currency: 'ILS' });
    return formattedPrice;
}
export default formatPrice