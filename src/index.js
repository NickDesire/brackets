module.exports = function check(str, bracketsConfig) {
    var chars = str.split(''),
        stack = [],
        open = ['{', '(', '['],
        close = ['}', ')', ']'],
        closeIndex,
        openIndex;

    // Проходимся по строке, проверяя каждый ее символ (п.4).
    for (var i = 0, len = chars.length; i < len; i++) {
        openIndex = open.indexOf(chars[i]);
        if (openIndex !== -1) {
            // Нашли открывающую скобку. Помещаем ее в стек (п.2).
            stack.push(openIndex);
            continue;
        }

        closeIndex = close.indexOf(chars[i]);
        if (closeIndex !== -1) {
            // Нашли закрывающую скобку. Проверяем ее соответствие открывающей (п.3).
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }

    // Проверяем дисбаланс открытых/закрытых скобок (п.5).
    if (stack.length !== 0) {
        return false;
    }

    return true;
}
