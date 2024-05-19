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

console.log(makeTransaction(5, 300, 1500));  // Достатньо коштів
console.log(makeTransaction(10, 300, 1500)); // Недостатньо коштів
console.log(makeTransaction(4, 200, 1000));  // Достатньо коштів
console.log(makeTransaction(7, 150, 1000));  // Недостатньо коштів