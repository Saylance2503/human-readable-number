module.exports = function toReadable (number) {
    let b = number % 10, a = (number - b) / 10,
        d = number % 100, c = (number - d) / 100,
        e = ((number - b) % 100) / 10,
        n1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        n2 = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number == 0) return 'zero';
    if (number < 20) return n1[number - 1];
    if (number < 100) {
        if (b === 0) return n2[a - 1];
        return n2[a - 1] + ' ' + n1[b - 1];
    }
    if (number < 1000) {
        if (d === 0) return n1[c - 1]+ ' hundred';
        if (b === 0) return n1[c - 1] + ' hundred ' + n2[e - 1];
        if (number % 100 < 20) return n1[c - 1] + ' hundred ' + n1[d - 1];
        return n1[c - 1] + ' hundred ' + n2[e - 1] + ' ' + n1[b - 1];
    }
}
