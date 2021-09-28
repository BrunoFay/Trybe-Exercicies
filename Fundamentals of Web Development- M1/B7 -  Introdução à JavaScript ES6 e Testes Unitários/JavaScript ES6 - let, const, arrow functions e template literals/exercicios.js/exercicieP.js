/* function fatorial(n) {
    if (n == 0) {
        return 1;
    }
    var resp = n;
    while (n > 2) {
        resp *= --n;
    }
    return resp;
} */
const fatorial = (n) => ((n == 0) ? n = 1 : n * fatorial(n - 1))
console.log(fatorial(5));