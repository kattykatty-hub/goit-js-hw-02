function formatMessage(message, maxLength) {
    // Перевіряємо, чи довжина рядка не перевищує maxLength
    if (message.length <= maxLength) {
        return message;
    } else {
        // Обрізаємо рядок до maxLength символів і додаємо трикрапку
        return message.slice(0, maxLength) + '...';
    }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
