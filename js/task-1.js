function makeTransaction(quantity, pricePerDroid, customerCredits) {
    // Обчислюємо загальну суму замовлення
    const totalPrice = quantity * pricePerDroid;

    // Перевіряємо, чи достатньо у клієнта коштів для оплати замовлення
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}
