
function getShippingCost(country) {
    let price;

    // Використовуємо інструкцію switch для перевірки країни та визначення вартості доставки
    switch (country) {
        case "China":
            price = 100;
            break;
        case "Chile":
            price = 250;
            break;
        case "Australia":
            price = 170;
            break;
        case "Jamaica":
            price = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }

    // Повертаємо повідомлення про вартість доставки
    return `Shipping to ${country} will cost ${price} credits`;
}
