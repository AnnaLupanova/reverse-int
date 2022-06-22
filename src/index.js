module.exports = function reverse (n) {
    n = Math.abs(n).toString().split('').reverse()
    return +n.join('')
}
