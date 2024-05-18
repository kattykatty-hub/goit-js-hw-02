
function checkForSpam(message) {
    // Приводимо рядок до нижнього регістру для полегшення пошуку заборонених слів
    const lowerCaseMessage = message.toLowerCase();
    
    // Перевіряємо, чи містить рядок заборонені слова
    if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
        return true;
    }
    
    return false;
}


