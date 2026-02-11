function checkChar(ch) {
    if (typeof ch !== "string" || ch.length !== 1) {
        return "Invalid input";
    }

    switch (ch.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return "Vowel";
        default:
            if (ch >= 'a' && ch <= 'z') {
                return "Consonant";
            }
            return "Invalid input";
    }
}