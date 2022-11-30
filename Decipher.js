function digitalDecipher(eMessage, key) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var decodedMessage = "";
    var stringKey = key.toString().split("");

    for (var i = 0; i < eMessage.length; i++){
        decodedMessage += alphabet[eMessage[i] - stringKey[i % stringKey.length] - 1];
    }

    return decodedMessage;
}

console.log(digitalDecipher([20, 12, 18, 30, 21], 1939));
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));